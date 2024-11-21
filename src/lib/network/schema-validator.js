import { Types } from "../../enums/types.enum.js";

export const validateSchema = (body, schema) => {
  for (const key of Object.keys(body)) {
    if (typeof schema === Types.OBJECT && !Object.hasOwn(schema, key)) {
      return false;
    }

    const instance = new schema();
    if (
      !Object.getOwnPropertyNames(instance).every((k) =>
        Object.keys(body).includes(k)
      )
    ) {
      return false;
    }

    if (
      instance[key] === Types.OBJECT ||
      typeof instance[key] === Types.FUNCTION
    ) {
      return validateSchema(body[key], instance[key]);
    }
  }
  return true;
};
