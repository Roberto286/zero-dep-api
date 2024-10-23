import { Types } from "../enums/types.enum.js";

const isMatchingType = (value, expectedType) => {
    return typeof expectedType === typeof value || typeof new expectedType === typeof value
};

export const validateSchema = (body, schema) => {
    return Object.entries(body).every(([key, value]) => {
        if(!Object.hasOwn(schema, key)) {
            return false;
        }

        if(!isMatchingType(value, schema[key])) {
            return false;
        }

        if(typeof value === Types.OBJECT) {
            return validateSchema(value, schema[key] ?? {});
        }

        return true;
    });
};
