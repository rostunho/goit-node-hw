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
  next();
}

function handleUnauthorized(error, data, next) {
  error.status = 401;
  error.message = `Email or password is wrong`;
  next();
}

module.exports = {
  handleSaveError,
  handleNotFoundError,
  handleConflictError,
  handleUnauthorized,
};
