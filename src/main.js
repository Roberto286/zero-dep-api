import { Router } from "./lib/router.js";
import { Server } from "./lib/server.js";
import { HttpMethods } from "./enums/http-methods.enum.js";
import { PORT } from '../config.js'


const router = Router();
const server = Server();

router.register('/', HttpMethods.GET, (req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ hello: "World!" }));
})

server.listen(PORT, undefined, undefined, () => {
    console.log(`Server listening on port ${PORT}`);
})