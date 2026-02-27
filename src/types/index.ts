// ============================================================
// RMMAI — Full TypeScript Types
// ============================================================

// ------------------------------------------------------------
// User / Auth
// ------------------------------------------------------------

export interface User {
  id: string
  email: string
  displayName: string
  avatarUrl?: string
  createdAt: string
  updatedAt: string
  spotifyConnected: boolean
  spotifyUserId?: string
}

export interface SpotifyUser {
  id: string
  display_name: string
  email: string
  images: SpotifyImage[]
  country: string
  product: 'free' | 'premium' | 'open'
  followers: {
    total: number
  }
  external_urls: {
    spotify: string
  }
}

export interface SupabaseProfile {
  id: string
  email: string
  display_name: string
  avatar_url: string | null
  spotify_user_id: string | null
  spotify_access_token: string | null
  spotify_refresh_token: string | null
  spotify_token_expires_at: string | null
  spotify_sp_dc: string | null
  taste_profile: TasteProfile | null
  created_at: string
  updated_at: string
}

// ------------------------------------------------------------
// Spotify Images
// ------------------------------------------------------------

export interface SpotifyImage {
  url: string
  height: number | null
  width: number | null
}

// ------------------------------------------------------------
// Artist
// ------------------------------------------------------------

export interface Artist {
  id: string
  name: string
  images: SpotifyImage[]
  genres: string[]
  popularity: number
  followers: {
    total: number
  }
  external_urls: {
    spotify: string
  }
  uri: string
  // Optional RYM-enriched fields
  rymData?: Partial<RYMData>
}

// Simplified artist reference used inside Track / Album
export interface ArtistRef {
  id: string
  name: string
  uri: string
  external_urls: {
    spotify: string
  }
}

// ------------------------------------------------------------
// Album
// ------------------------------------------------------------

export type AlbumType = 'album' | 'single' | 'compilation'

export interface Album {
  id: string
  name: string
  artists: ArtistRef[]
  images: SpotifyImage[]
  release_date: string
  release_date_precision: 'year' | 'month' | 'day'
  total_tracks: number
  album_type: AlbumType
  label?: string
  genres?: string[]
  popularity?: number
  external_urls: {
    spotify: string
  }
  uri: string
  // Optional enriched data
  rymData?: RYMData
  userRating?: Rating
}

// ------------------------------------------------------------
// Track
// ------------------------------------------------------------

export interface Track {
  id: string
  name: string
  artists: ArtistRef[]
  album: Album
  duration_ms: number
  explicit: boolean
  popularity: number
  preview_url: string | null
  track_number: number
  disc_number: number
  external_urls: {
    spotify: string
  }
  uri: string
  is_local: boolean
  is_playable?: boolean
}

// ------------------------------------------------------------
// Rating
// ------------------------------------------------------------

export interface Rating {
  id: string
  userId: string
  albumId: string
  score: number // 1–10
  review?: string
  createdAt: string
  updatedAt: string
  // Joined fields (populated on fetch)
  album?: Album
  user?: Pick<User, 'id' | 'displayName' | 'avatarUrl'>
}

// Supabase table shape (snake_case)
export interface SupabaseRating {
  id: string
  user_id: string
  album_id: string
  score: number
  review: string | null
  created_at: string
  updated_at: string
}

// ------------------------------------------------------------
// Friend Activity
// ------------------------------------------------------------

export interface FriendActivity {
  userId: string
  displayName: string
  avatarUrl?: string
  track: Track
  listenedAt: string // ISO timestamp
  isCurrentlyPlaying: boolean
  contextType?: 'album' | 'playlist' | 'artist' | 'unknown'
  contextUri?: string
  contextName?: string
}

// Raw shape returned by Spotify unofficial buddy-list endpoint
export interface SpotifyBuddyListEntry {
  timestamp: number
  user: {
    uri: string
    name: string
    imageUrl: string
  }
  track: {
    uri: string
    name: string
    imageUrl: string
    album: {
      uri: string
      name: string
    }
    artist: {
      uri: string
      name: string
    }
    context: {
      uri: string
      name: string
      index: number
    }
  }
}

// ------------------------------------------------------------
// Playlist
// ------------------------------------------------------------

export interface Playlist {
  id: string
  name: string
  description?: string
  tracks: Track[]
  createdBy: string // userId
  aiGenerated: boolean
  aiPrompt?: string // The prompt that generated this playlist
  public: boolean
  imageUrl?: string
  external_urls?: {
    spotify: string
  }
  snapshotId?: string
  createdAt: string
  updatedAt: string
}

// Supabase table shape
export interface SupabasePlaylist {
  id: string
  name: string
  description: string | null
  track_uris: string[]
  created_by: string
  ai_generated: boolean
  ai_prompt: string | null
  spotify_playlist_id: string | null
  spotify_snapshot_id: string | null
  public: boolean
  created_at: string
  updated_at: string
}

// ------------------------------------------------------------
// AI Chat
// ------------------------------------------------------------

export type AIMessageRole = 'user' | 'assistant'

export interface AIMessage {
  id: string
  role: AIMessageRole
  content: string
  albumRecommendations?: Album[]
  trackRecommendations?: Track[]
  createdAt: string
}

export interface AIConversation {
  id: string
  userId: string
  messages: AIMessage[]
  title?: string
  createdAt: string
  updatedAt: string
}

// Supabase table shape
export interface SupabaseAIConversation {
  id: string
  user_id: string
  messages: AIMessage[]
  title: string | null
  created_at: string
  updated_at: string
}

// ------------------------------------------------------------
// RYM (RateYourMusic) Data
// ------------------------------------------------------------

export interface RYMData {
  albumId: string // Spotify album ID (used as our key)
  rymUrl: string
  rymId?: string
  communityRank: number // e.g. 42 (meaning #42 on overall charts)
  weightedScore: number // e.g. 3.94 out of 5.00
  rawScore?: number // Average before weighting
  ratingCount?: number
  tags: string[] // Genre/descriptor tags from RYM community
  year: number
  primaryGenres?: string[]
  secondaryGenres?: string[]
  descriptors?: string[]
  scrapedAt: string // ISO timestamp of when data was fetched
}

// ------------------------------------------------------------
// Taste Profile
// ------------------------------------------------------------

export interface GenreSlice {
  name: string
  percentage: number // 0–100
}

export interface TasteTrait {
  name: string
  score: number // 0–100
  description?: string
}

export interface TasteProfile {
  genres: GenreSlice[]
  traits: TasteTrait[]
  topArtistIds: string[]
  topTrackIds: string[]
  rymInfluence?: number // How much RYM data influenced the profile (0–1)
  generatedAt: string // ISO timestamp
}

// ------------------------------------------------------------
// API Response Wrappers
// ------------------------------------------------------------

export interface SpotifyPaginated<T> {
  items: T[]
  total: number
  limit: number
  offset: number
  next: string | null
  previous: string | null
  href: string
}

export interface SpotifyRecentlyPlayedResponse {
  items: Array<{
    track: Track
    played_at: string
    context: {
      type: string
      uri: string
      external_urls: { spotify: string }
    } | null
  }>
  next: string | null
  cursors: {
    after: string
    before: string
  }
  limit: number
  href: string
}

export interface SpotifyCreatePlaylistResponse {
  id: string
  name: string
  public: boolean
  snapshot_id: string
  external_urls: {
    spotify: string
  }
  uri: string
}

// ------------------------------------------------------------
// UI / Component Helpers
// ------------------------------------------------------------

export type TimeRange = 'short_term' | 'medium_term' | 'long_term'

export interface SelectOption<T = string> {
  label: string
  value: T
}

export interface LoadingState {
  isLoading: boolean
  error: string | null
}

export interface PaginationState {
  page: number
  limit: number
  total: number
  hasMore: boolean
}
