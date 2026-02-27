import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('spotify_access_token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const time_range = searchParams.get('time_range') ?? 'medium_term'
  const type = searchParams.get('type') ?? 'tracks'
  const limit = searchParams.get('limit') ?? '20'

  const res = await fetch(
    `https://api.spotify.com/v1/me/top/${type}?limit=${limit}&time_range=${time_range}`,
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

  if (type === 'artists') {
    const items = (data.items ?? []).map((artist: any) => ({
      id: artist.id,
      name: artist.name,
      imageUrl: artist.images?.[0]?.url ?? null,
      genres: artist.genres ?? [],
      popularity: artist.popularity,
      spotifyUrl: artist.external_urls?.spotify ?? null,
    }))
    return NextResponse.json({ items })
  }

  const items = (data.items ?? []).map((track: any) => ({
    id: track.id,
    name: track.name,
    artist: track.artists?.[0]?.name ?? null,
    albumArt: track.album?.images?.[0]?.url ?? null,
    duration_ms: track.duration_ms,
    spotifyUrl: track.external_urls?.spotify ?? null,
  }))

  return NextResponse.json({ items })
}
