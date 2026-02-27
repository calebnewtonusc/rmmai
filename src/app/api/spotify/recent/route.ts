import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('spotify_access_token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=20', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (res.status === 401) {
    return NextResponse.json({ error: 'Token expired' }, { status: 401 })
  }

  const data = await res.json()

  const tracks = (data.items ?? []).map((item: any) => ({
    id: item.track.id,
    name: item.track.name,
    artist: item.track.artists?.[0]?.name ?? null,
    album: item.track.album?.name ?? null,
    albumArt: item.track.album?.images?.[0]?.url ?? null,
    duration_ms: item.track.duration_ms,
    played_at: item.played_at,
    spotifyUrl: item.track.external_urls?.spotify ?? null,
  }))

  return NextResponse.json({ tracks })
}
