import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const THIRTY_DAYS_SECONDS = 60 * 60 * 24 * 30

interface SpotifyTokenResponse {
  access_token: string
  token_type: string
  scope: string
  expires_in: number
  refresh_token: string
}

interface SpotifyUserProfile {
  id: string
  display_name: string | null
  email: string
  images: Array<{ url: string; height: number | null; width: number | null }>
  product: string
  [key: string]: unknown
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl
  const code = searchParams.get('code')
  const state = searchParams.get('state')

  const cookieStore = await cookies()
  const storedState = cookieStore.get('spotify_auth_state')?.value

  const failureRedirect = NextResponse.redirect(
    new URL('/?error=auth_failed', process.env.NEXT_PUBLIC_APP_URL)
  )

  if (!state || state !== storedState) {
    return failureRedirect
  }

  if (!code) {
    return failureRedirect
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    return failureRedirect
  }

  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/spotify`
  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  let tokenData: SpotifyTokenResponse

  try {
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      }),
    })

    if (!tokenResponse.ok) {
      return failureRedirect
    }

    tokenData = (await tokenResponse.json()) as SpotifyTokenResponse
  } catch {
    return failureRedirect
  }

  let userProfile: SpotifyUserProfile

  try {
    const profileResponse = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    })

    if (!profileResponse.ok) {
      return failureRedirect
    }

    userProfile = (await profileResponse.json()) as SpotifyUserProfile
  } catch {
    return failureRedirect
  }

  const response = NextResponse.redirect(
    new URL('/dashboard', process.env.NEXT_PUBLIC_APP_URL)
  )

  response.cookies.set('spotify_access_token', tokenData.access_token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: tokenData.expires_in,
    path: '/',
  })

  response.cookies.set('spotify_refresh_token', tokenData.refresh_token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: THIRTY_DAYS_SECONDS,
    path: '/',
  })

  response.cookies.set('spotify_user', JSON.stringify(userProfile), {
    httpOnly: false,
    sameSite: 'lax',
    maxAge: 60 * 60,
    path: '/',
  })

  response.cookies.delete('spotify_auth_state')

  return response
}
