const {
  getContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  updateStatusContactController,
  removeContactController,
} = require("./contacts");

const { registerController } = require("./auth");

module.exports = {
  getContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  updateStatusContactController,
  removeContactController,

  registerController,
};
