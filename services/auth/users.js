const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const gravatar = require("gravatar");
const { User } = require("../../models");
const { HttpError } = require("../../utils");
const { SECRET_KEY } = process.env;

async function registerNewUser(body) {
  const hashPassword = await bcrypt.hash(body.password, 10);

  const avatarUrl = gravatar.url(body.email);

  const user = await User.create({
    ...body,
    password: hashPassword,
    avatarUrl,
  });

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

async function changeUserStatus(id, subscription) {
  if (
    subscription !== "starter" &&
    subscription !== "pro" &&
    subscription !== "business"
  ) {
    throw HttpError(
      400,
      `DB: "subscription" must be one of [starter, pro, business] `
    );
  }

  const updatedUser = await User.findOneAndUpdate(
    { _id: id },
    { subscription },
    { new: true }
  );

  return updatedUser;
}

module.exports = {
  registerNewUser,
  findUserByEmail,
  createToken,
  removeToken,
  changeUserStatus,
};
