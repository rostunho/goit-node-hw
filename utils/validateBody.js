const { HttpError } = require("./HttpError");

function inspectBody(body) {
  const { name, email, phone } = body;
  if (!name) {
    throw HttpError(400, `Contoller: missing required "name"  field`);
  } else if (!email) {
    throw HttpError(400, `Contoller: missing required "email"  field`);
  } else if (!phone) {
    throw HttpError(400, `Contoller: missing required "phone"  field`);
  }
}

module.exports = { inspectBody };
