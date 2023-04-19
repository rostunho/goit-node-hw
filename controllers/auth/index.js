const { asyncWrapper } = require("../../utils");
const { registerController } = require("./registerController");
const { loginController } = require("./loginController");
const { getCurrentUserController } = require("./getCurrentUserController");
const { updateUserStatusController } = require("./updateUserStatusController");
const { updateAvatarController } = require("./updateAvatarController");
const { logoutController } = require("./logoutController");

module.exports = {
  registerController: asyncWrapper(registerController),
  loginController: asyncWrapper(loginController),
  getCurrentUserController: asyncWrapper(getCurrentUserController),
  updateUserStatusController: asyncWrapper(updateUserStatusController),
  logoutController: asyncWrapper(logoutController),
  updateAvatarController: asyncWrapper(updateAvatarController),
};
