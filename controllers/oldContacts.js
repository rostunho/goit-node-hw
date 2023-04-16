// const {
// getContacts,
// getContactbyId,
// addContact,
// updateContact,
// removeContact,
// } = require("../services");
// const { asyncWrapper } = require("../utils");

// async function getContactsController(req, res) {
//   const allContacts = await getContacts();
//   res.json(allContacts);
// }

// async function getContactByIdController(req, res) {
//   const { id } = req.params;
//   const contact = await getContactbyId(id);
//   res.json(contact);
// }

// async function addContactController(req, res) {
//   inspectBody(req.body);
//   const newContact = await addContact(req.body);
//   res.status(201).json(newContact);
// }

// async function updateContactController(req, res) {
//   inspectBody(req.body);
//   const updatedContact = await updateContact(req.params.id, req.body);
//   res.json(updatedContact);
// }

// async function updateStatusContactController(req, res) {
//   inspectStatus(req.body);
//   const updatedStatus = await updateContact(req.params.id, req.body);
//   res.json(updatedStatus);
// }

// async function removeContactController(req, res) {
//   const { id } = req.params;
//   await removeContact(id);
//   res.json({ message: `Contact with ID ${id} deleted` });
// }

// module.exports = {
//   getContactsController: asyncWrapper(getContactsController),
//   getContactByIdController: asyncWrapper(getContactByIdController),
//   addContactController: asyncWrapper(addContactController),
//   updateContactController: asyncWrapper(updateContactController),
//   updateStatusContactController: asyncWrapper(updateStatusContactController),
//   removeContactController: asyncWrapper(removeContactController),
// };
