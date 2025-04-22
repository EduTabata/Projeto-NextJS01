import postgres from 'postgres';
import { NextResponse } from 'next/server';
import * as definitions from '../lib/definitions';

type InvoiceWithName = definitions.Invoice & {
  name: string;
};

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: process.env.NODE_ENV === 'production' ? 'require' : 'allow',
  idle_timeout: 20,
  max: 10
});

export async function GET() {
  try {
    const invoices = await sql<InvoiceWithCustomer[]>`
      SELECT invoices.*, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666
    `;

    if (!invoices || invoices.length === 0) {
      return NextResponse.json(
        { error: "No invoices found with amount 666" },
        { status: 404 }
      );
    }
      return NextResponse.json(invoices);
    
  } catch (error: any) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { 
        error: "Failed to fetch invoices",
        details: process.env.NODE_ENV === 'development' ? error.message : null
      }, 
      { status: 500 }
    );
  }
}