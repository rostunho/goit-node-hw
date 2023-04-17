const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../../models");
const { HttpError } = require("../../utils");
const { SECRET_KEY } = process.env;

async function findUserByEmail(email) {
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Controller. Unzuthorized: email is wrong");
  }

  return user;
}

function createToken(user, lifetime) {
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: `${lifetime}h` });

  return token;
}

module.exports = { findUserByEmail, createToken };
