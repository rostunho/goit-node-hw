const { removeToken } = require("../../services");

async function logoutController(req, res) {
  const { _id } = req.user;
  await removeToken(_id);

  res.status(204).send();
}

module.exports = { logoutController };
