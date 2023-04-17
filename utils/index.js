const { asyncWrapper, HttpError, emailRegex, phoneRegex } = require("./common");
const { inspectBody, inspectStatus, validateId } = require("./contacts");
const { checkPassword } = require("./auth");

module.exports = {
  inspectBody,
  inspectStatus,
  validateId,
  asyncWrapper,
  HttpError,
  emailRegex,
  phoneRegex,
  checkPassword,
};
