const { getContacts } = require("../../services");

async function getContactsController(req, res) {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;

  const allContacts = await getContacts(owner, page, limit);
  res.json(allContacts);
}

module.exports = getContactsController;
