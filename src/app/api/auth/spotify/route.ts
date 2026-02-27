import { NextResponse } from 'next/server'

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

function generateRandomState(length = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export async function GET(): Promise<NextResponse> {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  if (!clientId) {
    return NextResponse.json({ error: 'Missing SPOTIFY_CLIENT_ID' }, { status: 500 })
  }

  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/spotify`
  const state = generateRandomState()

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    scope: SPOTIFY_SCOPES,
    state,
  })

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?${params.toString()}`

  const response = NextResponse.redirect(spotifyAuthUrl)

  response.cookies.set('spotify_auth_state', state, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 600,
    path: '/',
  })

  return response
}
