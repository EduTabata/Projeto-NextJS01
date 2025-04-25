"use client"
import { useState } from "react"

export default function InvoicePage() {
  const [data, setData] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchData() {
    setLoading(true)
    setError(null)
    
    try {
      const res = await fetch("/api/invoices")
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      const json = await res.json()
      setData(json)
    } catch (error) {
      console.error("Fetch error:", error)
      setError(error.message || "Failed to fetch data")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <button 
        onClick={fetchData} 
        disabled={loading}
        className="fetch-button"
      >
        {loading ? "Loading..." : "Get Invoice Data"}
      </button>

      {error && <p className="error">Error: {error}</p>}

      {data && (
        <div className="invoice-data">
          <p>Amount: {data.amount}</p>
          <p>Name: {data.name}</p>
        </div>
      )}
    </div>
  )
}