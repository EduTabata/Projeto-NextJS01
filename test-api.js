fetch('/api/invoices')
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);