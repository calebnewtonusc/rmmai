import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('spotify_access_token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const res = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (res.status === 401) {
    return NextResponse.json({ error: 'Token expired' }, { status: 401 })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
