export const validateSchema = (body, schema) => {
    return Object.keys(schema).every(key => Object.hasOwn(body, key));
};