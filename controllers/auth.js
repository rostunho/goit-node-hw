const bcrypt = require("bcryptjs");
const { asyncWrapper } = require("../utils");
const { User } = require("../models");

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

module.exports = { registerController: asyncWrapper(registerController) };
