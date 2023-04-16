const { getContacts } = require("../../services");

async function getContactsController(req, res) {
  const allContacts = await getContacts();
  res.json(allContacts);
}

module.exports = getContactsController;
