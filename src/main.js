import { Server } from "./lib/server.js";
import { PORT } from '../config.js'

const server = Server();

server.get('/', (req, res) => {
    res.write("Hello world")
    res.end()
})

server.listen(PORT, undefined, undefined, () => {
    console.log(`Server listening on port ${PORT}`);
})