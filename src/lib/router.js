export const routes = [];

export class Router {
    static register(path, method, handler) {
        routes.push({ path, method, handler });
    }

    static findHandler(req) {
        return routes.find(({ method, path }) => req.method === method && req.url === path);
    }
}
