import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: {
      hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      hasDustKey: !!process.env.DUST_API_KEY,
      hasSunoKey: !!process.env.SUNO_API_TOKEN,
      hasGroqKey: !!process.env.GROQ_API_KEY,
    }
  })
}
