import { Server } from "http";
import { Router } from "./router.js";
import { HttpMethods } from "../enums/http-methods.enum.js";
import { parseBody } from "./body-parser.js";
import { enhanceResponse } from "./response-enhancer.js";

class CustomServer extends Server {
    static #instance = null;

    constructor() {
        super();
        this.#registerHttpMethods();
        this.on('request', this.#handleRequest.bind(this));
        CustomServer.#instance = this;
    }

    async #handleRequest(req, res) {
        try {
            await this.#applyMiddlewares(req, res);
            const handler = Router.findHandler(req, res);

            if(handler) {
                await handler(req, res);
            }else {
                this.#sendNotFound(res);
            }
        }catch(error) {
            this.#handleError(error, res);
        }
    }

    async #applyMiddlewares(req, res) {
        enhanceResponse(res);
        req.body = await parseBody(req);
    }

    #registerHttpMethods() {
        Object.values(HttpMethods).forEach(method => {
            this[method.toLowerCase()] = (path, handler) => {
                Router.register(path, method, handler);
            };
        });
    }

    #sendNotFound(res) {
        res.send("Resource not found", 404)
    }

    #handleError(error, res) {
        console.error(error);
        res.send("Internal server error", 500)
    }

    static getInstance() {
        return CustomServer.#instance || new CustomServer();
    }
}

export const getServer = CustomServer.getInstance;
