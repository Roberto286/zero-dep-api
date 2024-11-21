import { getServer } from "./lib/network/server.js";
import { PORT } from "../config.js";
import "./api/books/routes.js";
import { initDatabase } from "./lib/database/database.js";
console.log(
  (eval("var __temp = null"), typeof __temp === "undefined")
    ? "strict"
    : "non-strict"
);

const server = getServer();
initDatabase();

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
