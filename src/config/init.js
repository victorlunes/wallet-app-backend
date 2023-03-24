const tableQueries = require("../queries/tables")
const db = require('../db')

db.connect().then( async () => {
    await db.query(tableQueries.createUsers())
    await db.query(tableQueries.createCategories())
    await db.query(tableQueries.createFinances())
    console.log("Successfully created tables")
    db.end()
    return;
}).catch((error) => { 
    throw new Error("Erro configuring database", error)
})


