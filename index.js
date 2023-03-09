const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Aplicação do wallet bac end")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})