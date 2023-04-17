const { addContact } = require("../../services");
const { inspectBody } = require("../../utils");

async function addContactController(req, res) {
  console.log(req);
  const { _id: owner } = req.user;

  inspectBody(req.body);
  const newContact = await addContact({ ...req.body, owner });
  res.status(201).json(newContact);
}

module.exports = addContactController;
