import { Crud } from "../../lib/crud.js";
import { createBook, findAllBooks } from "../../lib/database/database.js";

export class BookActions extends Crud {
  constructor() {
    super();
  }

  Create(book) {
    return createBook(book);
  }

  FindAll() {
    return findAllBooks();
  }

  FindById(id) {
    console.log(`Finding Book with id: ${id}`);
    return {};
  }

  Update(id) {
    console.log(`Updating Book with id: ${id}`);
    return {};
  }

  Patch(id) {
    console.log(`Updating Book with id: ${id}`);
    return {};
  }

  Delete(id) {
    console.log(`Deleting Book with id: ${id}`);
  }
}
