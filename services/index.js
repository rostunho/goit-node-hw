const {
  getContacts,
  getContactbyId,
  addContact,
  updateContact,
  removeContact,
} = require("./contacts/contacts");

const {
  registerNewUser,
  findUserByEmail,
  createToken,
  removeToken,
} = require("./auth");

module.exports = {
  getContacts,
  getContactbyId,
  addContact,
  updateContact,
  removeContact,
  registerNewUser,
  findUserByEmail,
  createToken,
  removeToken,
};
