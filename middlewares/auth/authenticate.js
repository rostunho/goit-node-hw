const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../../models");
const { HttpError } = require("../../utils");
const { SECRET_KEY } = process.env;

async function authenticate(req, res, next) {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || !token) {
    next(HttpError(401, "Unauthorized: no token or wrong token type"));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token) {
      next(HttpError(401, "Unauthorized: Account is deactivated"));
    }

    req.user = user;
    next();
  } catch {
    next(HttpError(401, "Unauthorized: token is not valid"));
  }
}

module.exports = { authenticate };
