const {
  getContacts,
  getContactbyId,
  addContact,
  updateContact,
  removeContact,
} = require("./contacts/contacts");

const { findUserByEmail, createToken } = require("./auth");

module.exports = {
  getContacts,
  getContactbyId,
  addContact,
  updateContact,
  removeContact,
  findUserByEmail,
  createToken,
};
