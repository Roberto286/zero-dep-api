"use strict";
import { getServer } from "./lib/server.js";
import { PORT } from '../config.js'
import './books/routes.js'

const server = getServer();

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})