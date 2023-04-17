const { asyncWrapper } = require("../utils");
const {
  registerNewUser,
  findUserByEmail,
  createToken,
} = require("../services");
const { checkPassword } = require("../utils");

async function registerController(req, res) {
  const user = await registerNewUser(req.body);

  res.status(201).json({
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
}

async function loginController(req, res) {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);
  await checkPassword(user, password);

  const token = createToken(user, 23);

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
