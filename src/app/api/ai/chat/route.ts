import { anthropic } from '@ai-sdk/anthropic'
import { streamText } from 'ai'
import { cookies } from 'next/headers'

export const maxDuration = 30

export async function POST(req: Request) {
  // Parse the request body - expect { messages: [{role, content}], tasteProfile?: object }
  const { messages, tasteProfile } = await req.json()

  // Try to get Spotify user info from cookie for personalization
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('spotify_user')
  const spotifyUser = userCookie ? JSON.parse(userCookie.value) : null

  // Build system prompt with music context
  const systemPrompt = `You are RMM.AI's AI music intelligence assistant. You help users discover music, analyze their taste, and get personalized recommendations.

You have access to the user's music data:
- User: ${spotifyUser?.display_name || 'Music Lover'}
${tasteProfile ? `- Taste Profile: ${JSON.stringify(tasteProfile)}` : ''}

You are deeply knowledgeable about:
- All music genres, artists, albums, and trends
- Music theory, production techniques, and sonic characteristics
- How to match music to moods, activities, and personality types
- The social/cultural context of music

Be conversational, insightful, and specific. When recommending albums, mention specific tracks. Use music terminology naturally. Keep responses concise but rich with value. Format lists clearly.`

  const result = streamText({
    model: anthropic('claude-opus-4-6'),
    system: systemPrompt,
    messages,
    maxOutputTokens: 1024,
  })

  return result.toTextStreamResponse()
}
