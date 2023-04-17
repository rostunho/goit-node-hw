function handleConflictError(error, data, next) {
  error.status = 409;
  error.message = `DB: Email "${error.keyValue.email}" already in use`;
  next();
}

function handleUnauthorized(error, data, next) {
  error.status = 401;
  error.message = `DB: Email or password is wrong`;
  next();
}

module.exports = { handleConflictError, handleUnauthorized };
