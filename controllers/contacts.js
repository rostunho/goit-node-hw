const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../models");

const { HttpError, validateBody, inspectContact } = require("../helpers");

async function getContactsController(req, res, next) {
  try {
    const allContacts = await listContacts();
    res.json(allContacts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function getContactbyIdController(req, res, next) {
  try {
    const { id } = req.params;
    const contact = await getContactById(id);

    if (!contact) {
      throw HttpError(404, `Contact with id ${id} not found`);
    }

    res.json(contact);
  } catch (error) {
    next(error);
  }
}

async function addContactController(req, res, next) {
  try {
    validateBody(req.body);
    const newContact = await addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
}

async function updateContactController(req, res, next) {
  try {
    validateBody(req.body);
    const { id } = req.params;
    const updatedContact = await updateContact(id, req.body);
    inspectContact(updatedContact, id);
    res.json(updatedContact);
  } catch (error) {
    next(error);
  }
}

async function removeContactController(req, res, next) {
  try {
    const { id } = req.params;
    const removedContact = await removeContact(id);
    inspectContact(removedContact, id);
    res.json({ message: "Contact deleted" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getContactsController,
  getContactbyIdController,
  addContactController,
  updateContactController,
  removeContactController,
};
