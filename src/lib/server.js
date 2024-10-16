import { Server } from "http";
import { Router } from "./router.js";
import { HttpMethods } from "../enums/http-methods.enum.js";

class CustomServer extends Server {
    static #instance = null;

    constructor() {
        super((req, res) => {
            const { handler } = Router.findHandler(req, res) || {};
            if(handler) {
                this.#enhanceResObject(res);
                handler(req, res);
            }else {
                this.#notFound(res);
            }
        });

        this.#registerHttpMethods();
        CustomServer.#instance = this;
    }

    #registerHttpMethods() {
        Object.values(HttpMethods).forEach(method => {
            this[method.toLowerCase()] = (path, handler) => {
                Router.register(path, method, handler);
            };
        });
    }

    #enhanceResObject(res) {
        //FIXME res.send is not working
        res.send = (data, statusCode = 200) => {
            res.writeHead(statusCode, { "Content-Type": "application/json" });
            res.end(JSON.stringify(data));
        }
    }

    #notFound(res) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Resource Not Found");
    }

    static get instance() {
        return CustomServer.#instance || new CustomServer();
    }
}

export const getServer = () => CustomServer.instance;