const { changeUserStatus } = require("../../services");

async function updateUserStatusController(req, res) {
  const { _id } = req.user;
  const { subscription } = req.body;
  const userWithUpdatedStatus = await changeUserStatus(_id, subscription);

  res.json(userWithUpdatedStatus);
}

module.exports = { updateUserStatusController };
