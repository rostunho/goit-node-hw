const { validateBody } = require("./contacts");

const { authenticate, upload } = require("./auth");
const { handleErrors } = require("./common");

module.exports = {
  validateBody,
  authenticate,
  handleErrors,
  upload,
};
