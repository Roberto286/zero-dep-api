export const routes = [];

export const Router = () => {
    return {
        register: (path, method, handler) => {
            routes.push({ path, method, handler })
        }
    }
}