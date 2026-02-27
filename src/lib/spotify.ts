import type {
  Track,
  Artist,
  FriendActivity,
  SpotifyBuddyListEntry,
  SpotifyRecentlyPlayedResponse,
  SpotifyPaginated,
  SpotifyCreatePlaylistResponse,
  TimeRange,
} from '@/types'

// ------------------------------------------------------------
// Constants
// ------------------------------------------------------------

const SPOTIFY_API_BASE = 'https://api.spotify.com/v1'
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!
const SPOTIFY_REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI!

// Scopes required by the app
const SPOTIFY_SCOPES = [
  'user-read-private',
  'user-read-email',
  'user-read-recently-played',
  'user-top-read',
  'user-read-currently-playing',
  'user-read-playback-state',
  'playlist-modify-public',
  'playlist-modify-private',
  'playlist-read-private',
  'playlist-read-collaborative',
].join(' ')

// ------------------------------------------------------------
// Internal helper: fetch wrapper with Authorization header
// ------------------------------------------------------------

async function spotifyFetch<T>(
  url: string,
  accessToken: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(
      `Spotify API error ${response.status} on ${url}: ${errorBody}`
    )
  }

  return response.json() as Promise<T>
}

// ------------------------------------------------------------
// getSpotifyAuthUrl
// Returns the Spotify OAuth 2.0 authorization URL that the user
// should be redirected to in order to grant permissions.
// ------------------------------------------------------------

export function getSpotifyAuthUrl(): string {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: SPOTIFY_CLIENT_ID,
    scope: SPOTIFY_SCOPES,
    redirect_uri: SPOTIFY_REDIRECT_URI,
    // Generate a simple state token to protect against CSRF.
    // In production, use a cryptographically random value stored in session.
    state: Math.random().toString(36).substring(2, 15),
    show_dialog: 'false',
  })

  return `https://accounts.spotify.com/authorize?${params.toString()}`
}

// ------------------------------------------------------------
// getRecentlyPlayed
// Fetches the 50 most recently played tracks for the user.
// ------------------------------------------------------------

export async function getRecentlyPlayed(
  accessToken: string
): Promise<Track[]> {
  try {
    const data = await spotifyFetch<SpotifyRecentlyPlayedResponse>(
      `${SPOTIFY_API_BASE}/me/player/recently-played?limit=50`,
      accessToken
    )

    return data.items.map((item) => item.track)
  } catch (error) {
    console.error('[spotify] getRecentlyPlayed error:', error)
    return []
  }
}

// ------------------------------------------------------------
// getTopTracks
// Fetches the user's top tracks for the given time range.
//   short_term  → approximately last 4 weeks
//   medium_term → approximately last 6 months
//   long_term   → calculated from several years of data
// ------------------------------------------------------------

export async function getTopTracks(
  accessToken: string,
  timeRange: TimeRange = 'medium_term'
): Promise<Track[]> {
  try {
    const data = await spotifyFetch<SpotifyPaginated<Track>>(
      `${SPOTIFY_API_BASE}/me/top/tracks?limit=50&time_range=${timeRange}`,
      accessToken
    )

    return data.items
  } catch (error) {
    console.error('[spotify] getTopTracks error:', error)
    return []
  }
}

// ------------------------------------------------------------
// getTopArtists
// Fetches the user's top artists for the given time range.
// ------------------------------------------------------------

export async function getTopArtists(
  accessToken: string,
  timeRange: TimeRange | string = 'medium_term'
): Promise<Artist[]> {
  try {
    const data = await spotifyFetch<SpotifyPaginated<Artist>>(
      `${SPOTIFY_API_BASE}/me/top/artists?limit=50&time_range=${timeRange}`,
      accessToken
    )

    return data.items
  } catch (error) {
    console.error('[spotify] getTopArtists error:', error)
    return []
  }
}

// ------------------------------------------------------------
// getFriendActivity
// Uses Spotify's unofficial presence/buddy-list endpoint to
// retrieve what friends are currently listening to.
//
// IMPORTANT: This endpoint is not part of Spotify's public API
// and may change or break without notice. It requires the
// `sp_dc` cookie from an authenticated Spotify web session —
// NOT a standard OAuth access token.
//
// The spDcCookie value should be obtained from the user's
// browser session (stored in our Supabase profile as spotify_sp_dc).
// ------------------------------------------------------------

const BUDDY_LIST_URL =
  'https://spclient.wg.spotify.com/presence-view/v1/buddylist'

export async function getFriendActivity(
  spDcCookie: string
): Promise<FriendActivity[]> {
  try {
    const response = await fetch(BUDDY_LIST_URL, {
      headers: {
        // The sp_dc cookie is passed as a Cookie header, not as
        // a Bearer token. Spotify's web client does the same.
        Cookie: `sp_dc=${spDcCookie}`,
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) ' +
          'AppleWebKit/537.36 (KHTML, like Gecko) ' +
          'Chrome/120.0.0.0 Safari/537.36',
        Accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        Referer: 'https://open.spotify.com/',
        Origin: 'https://open.spotify.com',
      },
    })

    if (!response.ok) {
      throw new Error(
        `Buddy list request failed with status ${response.status}. ` +
          'The sp_dc cookie may be expired or invalid.'
      )
    }

    const data: { friends: SpotifyBuddyListEntry[] } = await response.json()

    return (data.friends ?? []).map(
      (entry): FriendActivity => ({
        userId: entry.user.uri.split(':').pop() ?? entry.user.uri,
        displayName: entry.user.name,
        avatarUrl: entry.user.imageUrl || undefined,
        listenedAt: new Date(entry.timestamp).toISOString(),
        isCurrentlyPlaying:
          Date.now() - entry.timestamp < 5 * 60 * 1000, // within last 5 min

        // Build a minimal Track from the buddy-list data.
        // A full Track fetch would require a separate Spotify API call.
        track: {
          id: entry.track.uri.split(':').pop() ?? '',
          name: entry.track.name,
          uri: entry.track.uri,
          artists: [
            {
              id: entry.track.artist.uri.split(':').pop() ?? '',
              name: entry.track.artist.name,
              uri: entry.track.artist.uri,
              external_urls: {
                spotify: `https://open.spotify.com/artist/${entry.track.artist.uri.split(':').pop()}`,
              },
            },
          ],
          album: {
            id: entry.track.album.uri.split(':').pop() ?? '',
            name: entry.track.album.name,
            uri: entry.track.album.uri,
            artists: [],
            images: entry.track.imageUrl
              ? [{ url: entry.track.imageUrl, height: 300, width: 300 }]
              : [],
            release_date: '',
            release_date_precision: 'year',
            total_tracks: 0,
            album_type: 'album',
            external_urls: {
              spotify: `https://open.spotify.com/album/${entry.track.album.uri.split(':').pop()}`,
            },
          },
          duration_ms: 0,
          explicit: false,
          popularity: 0,
          preview_url: null,
          track_number: 0,
          disc_number: 1,
          external_urls: {
            spotify: `https://open.spotify.com/track/${entry.track.uri.split(':').pop()}`,
          },
          is_local: false,
        },

        contextType: entry.track.context?.uri
          ? (entry.track.context.uri.split(':')[1] as FriendActivity['contextType'])
          : 'unknown',
        contextUri: entry.track.context?.uri,
        contextName: entry.track.context?.name,
      })
    )
  } catch (error) {
    console.error('[spotify] getFriendActivity error:', error)
    return []
  }
}

// ------------------------------------------------------------
// createPlaylist
// Creates a new Spotify playlist for the given user and adds
// the provided track URIs to it.
// Returns the playlist ID and public URL on success.
// ------------------------------------------------------------

export async function createPlaylist(
  accessToken: string,
  userId: string,
  name: string,
  trackUris: string[]
): Promise<{ id: string; url: string }> {
  try {
    // Step 1: Create an empty playlist
    const playlist = await spotifyFetch<SpotifyCreatePlaylistResponse>(
      `${SPOTIFY_API_BASE}/users/${encodeURIComponent(userId)}/playlists`,
      accessToken,
      {
        method: 'POST',
        body: JSON.stringify({
          name,
          public: false,
          collaborative: false,
          description: 'Created by RMM.AI',
        }),
      }
    )

    // Step 2: Add tracks in batches of 100 (Spotify's limit per request)
    const BATCH_SIZE = 100
    for (let i = 0; i < trackUris.length; i += BATCH_SIZE) {
      const batch = trackUris.slice(i, i + BATCH_SIZE)
      await spotifyFetch(
        `${SPOTIFY_API_BASE}/playlists/${playlist.id}/tracks`,
        accessToken,
        {
          method: 'POST',
          body: JSON.stringify({ uris: batch }),
        }
      )
    }

    return {
      id: playlist.id,
      url: playlist.external_urls.spotify,
    }
  } catch (error) {
    console.error('[spotify] createPlaylist error:', error)
    return { id: '', url: '' }
  }
}
