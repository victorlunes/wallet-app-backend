const express = require('express')
const db = require("./db")
const app = express()
app.use(express.json())
const port = 3000
const routerCategories = require("./routes/categories")

app.get('/', (req, res) => {
  res.send("Aplicação do wallet back end")
})

app.use("/categories", routerCategories)

app.listen(port, () => {
  db.connect()
    .then(() => {
      console.log("Conectado com o DB!")
    }) 
    .catch((error) => {
      return console.log(error)
    });
  console.log(`Example app listening on port ${port}`)
})