import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

// ------------------------------------------------------------
// Environment variables
// ------------------------------------------------------------

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

// ------------------------------------------------------------
// Browser / client-side Supabase client
// Instantiated once and reused across the app (singleton pattern).
// ------------------------------------------------------------

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})

// ------------------------------------------------------------
// Server-side Supabase client (Next.js App Router / Route Handlers)
//
// Uses @supabase/ssr to correctly forward cookies so that
// server components and route handlers can access authenticated
// sessions without re-authenticating.
//
// Usage (inside a Server Component or Route Handler):
//   import { createServerSupabaseClient } from '@/lib/supabase'
//   const supabase = await createServerSupabaseClient()
// ------------------------------------------------------------

export async function createServerSupabaseClient(): Promise<SupabaseClient> {
  // Dynamic import keeps this code out of the client bundle.
  const { createServerClient } = await import('@supabase/ssr')
  const { cookies } = await import('next/headers')

  const cookieStore = await cookies()

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        } catch {
          // In Server Components the cookie store is read-only.
          // Mutations are only valid inside Route Handlers / Middleware.
        }
      },
    },
  })
}

// ------------------------------------------------------------
// Admin / Service-Role client
// NEVER expose this to the browser — only use in server-only
// code (API routes, server actions, scripts).
// ------------------------------------------------------------

export function createAdminSupabaseClient(): SupabaseClient {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!serviceRoleKey) {
    throw new Error(
      'SUPABASE_SERVICE_ROLE_KEY is not set. ' +
        'This client must only be used in server-side code.'
    )
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

// ------------------------------------------------------------
// Helper: get the currently authenticated user from the server
// Returns null if unauthenticated.
// ------------------------------------------------------------

export async function getServerUser() {
  const client = await createServerSupabaseClient()
  const {
    data: { user },
    error,
  } = await client.auth.getUser()

  if (error || !user) return null
  return user
}
