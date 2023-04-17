const { registerNewUser } = require("../../services");

async function registerController(req, res) {
  const user = await registerNewUser(req.body);

  res.status(201).json({
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
}

module.exports = { registerController };
