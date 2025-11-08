import { NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

export async function GET() {
  try {
    // Count all skillUpRegistration documents
    const count = await client.fetch(
      `count(*[_type == "skillUpRegistration"])`
    )
    
    return NextResponse.json({ count: count || 0 })
  } catch (error) {
    console.error('Error fetching registration count:', error)
    return NextResponse.json(
      { error: 'Failed to fetch registration count', count: 0 },
      { status: 500 }
    )
  }
}

