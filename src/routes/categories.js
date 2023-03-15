const express = require('express')
const router = express.Router()
const db = require('../db')

const findOne = (id) => {
    return query = {
        name: 'fetch-category',
        text: 'SELECT * FROM categories WHERE id = $1',
        values: [Number(id)],
    };
};

router.get('/', (req, res) => {
    try {
        db.query("SELECT * FROM categories", (error, response) =>{
        if (error) {
            return res.status(500).json(error)
        }
        return res.status(200).json(response.rows)
    });
    } catch (error) {
        return res.status(500).json(error)
    }
});

router.post('/', (req, res) =>{
    try {
        const { name } = req.body
        if(name.length < 3){
            return res.status(400).json({ error: "name should have more than 3 characteres"})
        }
        const text = 'INSERT INTO categories(name) VALUES($1) RETURNING *'
        const values = [name]

        db.query(text, values, (error, response) => {
            if(error){
                return res.status(500).json(error)
            }
        return res.status(200).json(response.rows)
    })
    } catch (error) {
        return res.status(500).json(error)
        
    }
})

router.delete('/:id', async (req, res) =>{
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "param id is mandatory" })
        }
        const query = findOne(id)
        const category = await db.query(query)
            if(!category.rows[0]) {
                return res.status(400).json({ error: "Category not found" })
            }

        const text = 'DELETE FROM categories WHERE id=$1 RETURNING *'
        const values = [Number(id)]
        const deleteResponse = await db.query(text, values)
            if(!category.rows[0]) {
                return res.status(400).json({ error: "Category not deleted" })
            }
        return res.status(200).json(deleteResponse.rows)

    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router;