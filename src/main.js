"use strict";
import { getServer } from "./lib/server.js";
import { PORT } from '../config.js'
import './books/controllers.js'

const server = getServer();

server.get('/', (req, res) => {
    res.send("hello world")
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})