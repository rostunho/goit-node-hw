const { findUserByEmail, createToken } = require("../../services");
const { checkPassword } = require("../../utils");

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

module.exports = { loginController };
