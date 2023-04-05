const { ctrlWrapper } = require("../utils");
const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../models");
const { HttpError } = require("../utils");
const { inspectContact } = require("../utils");

async function getContactsController(req, res) {
  const allContacts = await listContacts();
  res.json(allContacts);
}

async function getContactbyIdController(req, res) {
  const { id } = req.params;
  const contact = await getContactById(id);
  inspectContact(contact, id);

  res.json(contact);
}

async function addContactController(req, res) {
  const newContact = await addContact(req.body);

  res.status(201).json(newContact);
}

async function updateContactController(req, res) {
  const { id } = req.params;
  const updatedContact = await updateContact(id, req.body);
  inspectContact(updatedContact, id);

  res.json(updatedContact);
}

async function removeContactController(req, res) {
  const { id } = req.params;
  const removedContact = await removeContact(id);

  inspectContact(removedContact, id);

  res.json({ message: `Contact "${removedContact.name}" deleted` });
}

module.exports = {
  getContactsController: ctrlWrapper(getContactsController),
  getContactbyIdController: ctrlWrapper(getContactbyIdController),
  addContactController: ctrlWrapper(addContactController),
  updateContactController: ctrlWrapper(updateContactController),
  removeContactController: ctrlWrapper(removeContactController),
};
