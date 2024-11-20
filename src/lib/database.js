import { DatabaseSync } from "node:sqlite";
import { DATABASE_PATH } from "../../config.js";

class Database {
  static #instance = null;

  constructor() {
    Database.#instance = new DatabaseSync(DATABASE_PATH);
  }

  static getInstance() {
    return Database.#instance || new Database();
  }
}

export const getDatabase = Database.getInstance;
