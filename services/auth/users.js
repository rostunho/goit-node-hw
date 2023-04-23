const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const gravatar = require("gravatar");
const Jimp = require("jimp");
const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models");
const { HttpError } = require("../../utils");
const { SECRET_KEY } = process.env;
const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

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
    throw HttpError(401, "Controller. Unauthorized: email is wrong");
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

async function processAvatar(id, tempPath, filename) {
  const image = await Jimp.read(tempPath);

  const avatarName = `${id}_${filename}`;

  image.resize(250, 250).write(`${avatarsDir}/${avatarName}`);

  await fs.unlink(tempPath);

  const avatarUrl = path.join("avatars", avatarName);
  await User.findByIdAndUpdate(id, { avatarUrl });

  return avatarUrl;
}

module.exports = {
  registerNewUser,
  findUserByEmail,
  createToken,
  removeToken,
  changeUserStatus,
  processAvatar,
};
