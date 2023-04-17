const { asyncWrapper } = require("../utils");
const {
  registerNewUser,
  findUserByEmail,
  createToken,
  removeToken,
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

  const token = await createToken(user, 23);

  res.json({
    token: token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
}

async function getCurrentUserController(req, res) {
  const { name, email, subscription } = req.user;

  res.json({
    name,
    email,
    subscription,
  });
}

async function logoutController(req, res) {
  const { _id } = req.user;
  await removeToken(_id);

  res.status(204);
}

module.exports = {
  registerController: asyncWrapper(registerController),
  loginController: asyncWrapper(loginController),
  getCurrentUserController: asyncWrapper(getCurrentUserController),
  logoutController: asyncWrapper(logoutController),
};
