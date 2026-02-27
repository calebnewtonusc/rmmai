import { NextResponse } from 'next/server'

export async function GET(): Promise<NextResponse> {
  const response = NextResponse.redirect(
    new URL('/', process.env.NEXT_PUBLIC_APP_URL)
  )

  const cookiesToDelete = [
    'spotify_access_token',
    'spotify_refresh_token',
    'spotify_user',
    'spotify_auth_state',
  ]

  for (const name of cookiesToDelete) {
    response.cookies.delete(name)
  }

  return response
}
