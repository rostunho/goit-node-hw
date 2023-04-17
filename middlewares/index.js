const { validateBody } = require("./contacts");

const { authenticate } = require("./auth");
const { handleErrors } = require("./common");

module.exports = {
  validateBody,
  authenticate,
  handleErrors,
};
