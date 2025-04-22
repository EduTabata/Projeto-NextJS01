'use client'; 

import { Invoice } from '../../lib/definitions';

export default function InvoiceList({ invoices }: { invoices: Invoice[] }) {
  return (
    <div>
      <h2>"Lista de invoices"</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.name}>
            {invoice.name} - {invoice.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}