const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./contacts.json");

async function listContacts() {
  try {
    const allContacts = await fs.readFile(contactsPath);
    return JSON.parse(allContacts);
  } catch (error) {
    return error.message;
  }
}

async function getContactById(contactId) {
  try {
    const allContacts = await listContacts();
    const singleContact = allContacts.find(
      (contact) => contact.id === contactId
    );
    return singleContact || null;
  } catch (error) {
    return error.message;
  }
}

async function addContact({ name, email, phone }) {
  try {
    const allContacts = await listContacts();
    const newContact = { id: nanoid(21), name, email, phone };
    allContacts.unshift(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return newContact;
  } catch (error) {
    return error.message;
  }
}

async function updateContact(id, body) {
  try {
    const allContacts = await listContacts();
    const contactToUpdateIdx = allContacts.findIndex(
      (contact) => contact.id === id
    );
    if (contactToUpdateIdx < 0) {
      return null;
    }
    allContacts[contactToUpdateIdx] = { id, ...body };
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return allContacts[contactToUpdateIdx];
  } catch (error) {
    return error.message;
  }
}

async function removeContact(id) {
  try {
    const allContacts = await listContacts();
    const contactToRemoveIdx = allContacts.findIndex(
      (contact) => contact.id === id
    );
    if (contactToRemoveIdx < 0) {
      return null;
    }
    const [removedContact] = allContacts.splice(contactToRemoveIdx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return removedContact;
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
