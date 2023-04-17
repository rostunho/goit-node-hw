const { getContacts } = require("../../services");

async function getContactsController(req, res) {
  const { _id: owner } = req.user;
  const allContacts = await getContacts(owner);
  res.json(allContacts);
}

module.exports = getContactsController;
