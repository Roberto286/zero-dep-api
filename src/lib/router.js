import { HttpMethods } from "../enums/http-methods.enum.js";

export const routes = [];

export const Router = () => {
    return {
        register: (path, method, handler) => {
            if(!HttpMethods[method]) {
                throw new Error(`Method ${method} is not supported`)
            }
            routes.push({ path, method, handler })
        }
    }
} 