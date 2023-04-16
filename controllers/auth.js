const bcrypt = require("bcryptjs");
const { asyncWrapper } = require("../utils");
const { User } = require("../models");
const { HttpError } = require("../utils");

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

  const token = ";fhv klerjhbt nl;ermhglker11111";

  res.json({
    token: token,
    user: {
      email: "example@example.com",
      subscription: "starter",
    },
  });
}

module.exports = {
  registerController: asyncWrapper(registerController),
  loginController: asyncWrapper(loginController),
};
