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

function inspectStatus(body) {
  if (body.favorite === undefined) {
    throw HttpError(400, `Controller: missing "favorite" field`);
  } else if (typeof body.favorite !== "boolean") {
    throw HttpError(400, `Controller: "favorite" field must be a boolean`);
  }
}

module.exports = { inspectBody, inspectStatus };
