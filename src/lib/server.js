import { createServer } from "http";
import { routes } from "./router.js";

export const Server = () => createServer((req, res) => {
    routes.forEach(({ method, path, handler }) => {
        if(req.method === method && req.url === path) {
            handler(req, res);
        }
    });
});