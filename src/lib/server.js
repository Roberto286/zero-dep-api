import { createServer } from "http";
import { Router, routes } from "./router.js";
import { HttpMethods } from "../enums/http-methods.enum.js";

const router = Router();

const extendServer = (server) => {
    server.get = (path, handler) => {
        router.register(path, HttpMethods.GET, handler)
    };
};

export const Server = () => {
    const server = createServer((req, res) => {
        routes.forEach(({ method, path, handler }) => {
            if(req.method === method && req.url === path) {
                handler(req, res);
            }
        });
    });

    extendServer(server);

    return server;
};
