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
  loginController,
  getCurrentUserController,
  updateUserStatusController,
  updateAvatarController,
  logoutController,
};
