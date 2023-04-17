const { Contact } = require("../../models");

async function getContacts(owner) {
  const allContacts = await Contact.find({ owner }, "-__v");
  return allContacts;
}

async function getContactbyId(id) {
  const contact = await Contact.findById(id, "-__v");
  return contact;
}

async function addContact(body) {
  const newContact = await Contact.create({ ...body });
  return newContact;
}

async function updateContact(id, body) {
  const updatedContact = await Contact.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updatedContact;
}

async function removeContact(id) {
  const removedContact = await Contact.findByIdAndDelete(id);
  return removedContact;
}

module.exports = {
  getContacts,
  getContactbyId,
  addContact,
  updateContact,
  removeContact,
};
