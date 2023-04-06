const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
require("colors");

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log(`Server running on port: ${PORT}`.blue);
  })
  .catch((error) => console.log(error.message));
