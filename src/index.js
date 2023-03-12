const express = require('express')
const db = require("./db")

const app = express()
const port = 3000


app.get('/categories' , (req, res) => {
  db.query("SELECT * FROM categories", (error, response) => {
    if (error) { 
      return res.status(500).json(error)
    }
    
    return res.status(200).json(response.rows);
  });
});

app.get('/', (req, res) => {
  res.send("Aplicação do wallet back end")
})

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
