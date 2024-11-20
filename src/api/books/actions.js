import { Crud } from "../../lib/crud.js";
import { getDatabase } from "../../lib/database.js";
export class BookActions extends Crud {
  constructor() {
    super();
    this.database = getDatabase();
  }

  Create() {
    this.database.exec("show tables");
    return {};
  }

  FindAll() {
    console.log("Finding Books");
    return [];
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
