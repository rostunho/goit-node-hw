const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { asyncWrapper } = require("../utils");
const { User } = require("../models");
const { HttpError } = require("../utils");

const { SECRET_KEY } = process.env;

async function registerController(req, res) {
  const { password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
}

async function loginController(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

  res.json({
    token: token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
}

module.exports = {
  registerController: asyncWrapper(registerController),
  loginController: asyncWrapper(loginController),
};
