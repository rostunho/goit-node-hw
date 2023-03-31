const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("./contacts");

const contacts = require("./contacts.json");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  contacts,
};
