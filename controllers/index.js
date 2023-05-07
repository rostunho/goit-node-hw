const {
  getAllContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  updateContactStatusController,
  removeContactController,
} = require("./contacts");

const {
  registerController,
  loginController,
  verifyEmailController,
  resendVerifyEmailController,
  getCurrentUserController,
  updateUserStatusController,
  updateAvatarController,
  logoutController,
} = require("./auth");

module.exports = {
  getAllContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  updateContactStatusController,
  removeContactController,

  registerController,
  verifyEmailController,
  resendVerifyEmailController,
  loginController,
  getCurrentUserController,
  updateUserStatusController,
  updateAvatarController,
  logoutController,
};
