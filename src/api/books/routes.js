import { getServer } from "../../lib/server.js";
import { BookActions } from "./actions.js";
import { Book } from "./book.model.js";

const server = getServer();
const { FindAll, FindById, Create, Delete, Patch, Update } = new BookActions()

//CREATE
server.post('/books', (req, res) => {
    let newBook = {}
    newBook = Create(newBook)
    res.send(newBook)
}, { schema: Book })

//READ
server.get('/books', (req, res) => {
    const books = FindAll();
    res.send(books)
})

server.get('/books/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    const book = FindById('')
    res.send(book)
})

//UPDATE
server.put('/books/:id', (req, res) => {
    const book = {}
    Update(book)
    res.send(book)
})

server.patch('/books/:id', (req, res) => {
    const book = {}
    Patch(book)
    res.send(book)
})

//DELETE
server.delete('/books/:id', (req, res) => {
    Delete('');
    res.send()
})