import { getServer } from "../lib/server.js";

const server = getServer();

//CREATE
server.post('/books', (req, res) => {
    res.write("Hello world")
    res.end()
})

//READ
server.get('/books', (req, res) => {
    res.send([])
})

server.get('/books/:id', (req, res) => {
    res.send({})
})

//UPDATE
server.patch('/books/:id', (req, res) => {
    res.send({})
})

server.put('/books/:id', (req, res) => {
    res.send({})
})

//DELETE
server.delete('/books/:id', (req, res) => {
    res.send({})
})