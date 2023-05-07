const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const gravatar = require("gravatar");
const Jimp = require("jimp");
const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models");
const { HttpError } = require("../../utils");
const { nanoid } = require("nanoid");
const { sendEmail } = require("../../helpers");

const { SECRET_KEY, BASE_URL } = process.env;

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

async function registerNewUser(body) {
  const hashPassword = await bcrypt.hash(body.password, 10);

  const avatarUrl = gravatar.url(body.email);
  const verificationToken = nanoid();

  const user = await User.create({
    ...body,
    password: hashPassword,
    avatarUrl,
    verificationToken,
  });

  const verifyEmail = {
    to: body.email,
    subject: "Verify Email",
    html: `<a target="_blank" href="${BASE_URL}/api/v1/users/verify/${verificationToken}">Click here to verify email</a>`,
  };

  await sendEmail(verifyEmail);

  return user;
}

async function sentUserNewVerificationEmail(email) {
  const user = User.findOne({ email });

  if (!user) {
    throw HttpError(400, "Email not found");
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const newVerifyEmail = {
    to: email,
    subject: "Verify Email",
    html: `<a target="_blank" href="${BASE_URL}/api/v1/users/verify/${user.verificationToken}">Click here to verify email</a>`,
  };

  await sendEmail(newVerifyEmail);
}

async function findUserByEmail(email) {
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Controller. Unauthorized: email is wrong");
  }

  if (!user.verify) {
    throw HttpError(401, "Controller. Email not verified");
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

async function findUserByVerificationToken(verificationToken) {
  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw HttpError(404, "Email not found");
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  return user;
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
  findUserByVerificationToken,
  sentUserNewVerificationEmail,
  createToken,
  removeToken,
  changeUserStatus,
  processAvatar,
};
