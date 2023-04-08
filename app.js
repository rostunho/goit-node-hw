const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { handleErrors } = require("./middlewares");

const contactsRouter = require("./routes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/v1/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found !" });
});

app.use(handleErrors);

module.exports = app;
