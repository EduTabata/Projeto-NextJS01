"use client"
import { useState, useEffect } from "react"

type Invoice = {
  id: number
  amount: number
  name: string
}

export default function InvoicePage() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/invoices')
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      
      const data = await response.json()
      console.log("Dados recebidos:", data) // Debug crucial
      
      if (!data || data.length === 0) {
        throw new Error("Nenhuma fatura encontrada")
      }
      
      setInvoices(data)
    } catch (err) {
      console.error("Erro completo:", err)
      setError(err instanceof Error ? err.message : "Erro desconhecido")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4">
      <button
        onClick={fetchData}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Carregando..." : "Buscar Faturas"}
      </button>

      {error && (
        <div className="text-red-500 mt-2 p-2 border border-red-300 rounded">
          Erro: {error}
        </div>
      )}

      <div className="mt-4 space-y-2">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="p-3 border rounded">
            <p><strong>Valor:</strong> {invoice.amount}</p>
            <p><strong>Cliente:</strong> {invoice.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}