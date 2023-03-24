const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

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

async function addContact(name, email, phone) {
  try {
    const allContacts = await listContacts();
    const newContact = { id: nanoid(21), name, email, phone };
    allContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return newContact;
  } catch (error) {
    return error;
  }
}

async function removeContact(contactId) {
  try {
    const allContacts = await listContacts();
    const contactIndex = allContacts.findIndex(
      (contact) => contact.id === contactId
    );
    if (contactIndex < 0) {
      return null;
    }
    const [removedContact] = allContacts.splice(contactIndex, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return removedContact;
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
