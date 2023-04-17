const {
  getAllContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  updateStatusContactController,
  removeContactController,
} = require("./contacts");

const {
  registerController,
  loginController,
  getCurrentUserController,
  logoutController,
} = require("./auth");

module.exports = {
  getAllContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  updateStatusContactController,
  removeContactController,

  registerController,
  loginController,
  getCurrentUserController,
  logoutController,
};
