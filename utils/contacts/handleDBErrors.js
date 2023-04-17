function handleSaveError(error, data, next) {
  error.status = 400;
  next();
}

function handleNotFoundError(error, data, next) {
  error.status = 404;
  error.message = `DB: Contact with ID ${error.value} is not found`;
  next();
}

module.exports = { handleSaveError, handleNotFoundError };
