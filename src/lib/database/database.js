import { DatabaseSync } from "node:sqlite";
import { DATABASE_PATH } from "../../../config.js";

const database = new DatabaseSync(DATABASE_PATH);

export const initDatabase = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT NOT NULL
    )
    `;
  database.exec(query);
};

export const createBook = ({ name, author }) => {
  const query = `INSERT INTO books (title, author) VALUES (?, ?)`;
  const result = database.prepare(query).run(name, author.name);

  return findBookBy("id", result.lastInsertRowid);
};

export const findAllBooks = () => {
  const query = `SELECT * FROM books`;

  return database.prepare(query).all();
};

export const findBookBy = (field, id) => {
  const query = `SELECT * FROM books WHERE ${field} = ?`;

  return database.prepare(query).get(id);
};
