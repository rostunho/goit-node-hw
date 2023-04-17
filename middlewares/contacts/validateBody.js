const { HttpError } = require("../../utils");

function validateBody(Schema) {
  const func = (req, res, next) => {
    const { error } = Schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };

  return func;
}

module.exports = { validateBody };
