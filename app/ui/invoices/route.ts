import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic'; // Para evitar cache

export async function GET() {
  try {
    const result = await sql`SELECT NOW() as time`;
    return NextResponse.json({ status: 'success', time: result.rows[0].time });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: error.message },
      { status: 500 }
    );
  }
}