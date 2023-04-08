const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
require("colors");

const PORT = process.env.PORT || 3003;
const DB_HOST = process.env.DB_HOST;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Server is running on port:".brightBlue, `${PORT}`.yellow);
    console.log("Database connection successful".brightBlue);
  })
  .catch((error) => {
    console.log(
      "Server not running.".red,
      `Error message: ${error.message}`.white
    );
    process.exit(1);
  });
