function handleSaveError(error, data, next) {
  error.status = 400;
  next();
}

function handleNotFoundError(error, data, next) {
  error.status = 404;
  error.message = `DB: Contact with ID ${error.value} is not found`;
  next();
}

function handleConflictError(error, data, next) {
  error.status = 409;
  error.message = `DB: Email "${error.keyValue.email}" already in use`;
  console.dir(error);
  next();
}

module.exports = { handleSaveError, handleNotFoundError, handleConflictError };
