fetch('/api/invoices')
  .then(res => res.json())
  .then(console.log(res.json))
  .catch(console.error);