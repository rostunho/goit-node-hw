const { HttpError } = require("./HttpError");

function inspectContact(contact, id) {
  if (!contact) {
    throw HttpError(404, `Contact with id "${id}" not found`);
  }
}

module.exports = { inspectContact };
