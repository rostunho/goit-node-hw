const { asyncWrapper } = require("../utils");
const { User } = require("../models");

async function registerController(req, res) {
  const user = await User.create(req.body);

  res.status(201).json({
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
}

module.exports = { registerController: asyncWrapper(registerController) };
