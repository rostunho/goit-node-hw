const { asyncWrapper } = require("../../utils");
const { registerController } = require("./registerController");
const { loginController } = require("./loginController");
const { getCurrentUserController } = require("./getCurrentUserController");
const { updateUserStatusController } = require("./updateUserStatusController");
const { updateAvatarController } = require("./updateAvatarController");
const { logoutController } = require("./logoutController");
const { verifyEmailController } = require("./verifyEmailController");
const {
  resendVerifyEmailController,
} = require("./resendVerifyEmailController");

module.exports = {
  registerController: asyncWrapper(registerController),
  verifyEmailController: asyncWrapper(verifyEmailController),
  resendVerifyEmailController: asyncWrapper(resendVerifyEmailController),
  loginController: asyncWrapper(loginController),
  getCurrentUserController: asyncWrapper(getCurrentUserController),
  updateUserStatusController: asyncWrapper(updateUserStatusController),
  logoutController: asyncWrapper(logoutController),
  updateAvatarController: asyncWrapper(updateAvatarController),
};
