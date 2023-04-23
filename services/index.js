const {
  getAllContacts,
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
  changeUserStatus,
  processAvatar,
} = require("./auth");

module.exports = {
  getAllContacts,
  getContactbyId,
  addContact,
  updateContact,
  removeContact,
  registerNewUser,
  findUserByEmail,
  createToken,
  removeToken,
  changeUserStatus,
  processAvatar,
};
