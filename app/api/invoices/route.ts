import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic'; 

export async function GET() {
  try {
    const result = await sql`SELECT invoices.amount, customers.name
FROM invoices
JOIN customers ON invoices.customer_name = customers.name
WHERE invoices.amount = 666;`;
    return NextResponse.json({ status: 'success', customerName:result.rows[0].customer_name, amount:result.rows[0].amount });
  } catch (error:any) {
    return NextResponse.json(
      { status: 'error', message: error.message },
      { status: 500 }
    );
  }
}