// Create web server
const express = require('express')
const app = express()
const port = 3000

// Create a new comment
app.post('/comments', (req, res) => {
    res.status(201).send('Comment created')
})

// Get all comments
app.get('/comments', (req, res) => {
    res.status(200).send('Comments')
})

// Get a comment by id
app.get('/comments/:id', (req, res) => {
    res.status(200).send(`Comment ${req.params.id}`)
})

// Update a comment
app.put('/comments/:id', (req, res) => {
    res.status(200).send(`Comment ${req.params.id} updated`)
})

// Delete a comment
app.delete('/comments/:id', (req, res) => {
    res.status(200).send(`Comment ${req.params.id} deleted`)
})

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})