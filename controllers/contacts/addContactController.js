const { addContact } = require("../../services");
const { inspectBody } = require("../../utils");

async function addContactController(req, res) {
  inspectBody(req.body);
  const newContact = await addContact(req.body);
  res.status(201).json(newContact);
}

module.exports = addContactController;
