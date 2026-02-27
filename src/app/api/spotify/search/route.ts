import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('spotify_access_token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')

  if (!q) {
    return NextResponse.json({ error: 'Missing query parameter: q' }, { status: 400 })
  }

  const res = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=album,artist,track&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (res.status === 401) {
    return NextResponse.json({ error: 'Token expired' }, { status: 401 })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
