import { Server } from "http";
import { Router } from "./router.js";
import { HttpMethods } from "../enums/http-methods.enum.js";

class CustomServer extends Server {
    constructor() {
        super((req, res) => {
            const { handler } = Router.findHandler(req) || {};
            if(handler) {
                this.enhanceResObject(res);
                handler(req, res);
            }else {
                this.notFound(res);
            }
        });

        Object.values(HttpMethods).forEach(method => {
            this[method.toLowerCase()] = (path, handler) => {
                Router.register(path, method, handler);
            };
        });
    }

    static getInstance() {
        if(!CustomServer.instance) {
            CustomServer.instance = new CustomServer();
        }
        return CustomServer.instance;
    }

    enhanceResObject(res) {
        res.send = (data, statusCode = 200) => {
            res.writeHead(statusCode, { "Content-Type": "application/json" });
            res.end(JSON.stringify(data));
        }
    }

    notFound(res) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Resource Not Found");
    }
}

export const getServer = () => CustomServer.getInstance();
