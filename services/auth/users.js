const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../../models");
const { HttpError } = require("../../utils");
const { SECRET_KEY } = process.env;

async function registerNewUser(body) {
  const hashPassword = await bcrypt.hash(body.password, 10);
  const user = await User.create({ ...body, password: hashPassword });

  return user;
}

async function findUserByEmail(email) {
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Controller. Unzuthorized: email is wrong");
  }

  return user;
}

async function createToken(user, lifetime) {
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: `${lifetime}h` });
  await User.findByIdAndUpdate(user._id, { token });

  return token;
}

async function removeToken(id) {
  await User.findByIdAndUpdate(id, { token: "" });
}

module.exports = { registerNewUser, findUserByEmail, createToken, removeToken };
