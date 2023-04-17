const { getContacts } = require("../../services");

async function getAllContactsController(req, res) {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = false } = req.query;

  const allContacts = await getContacts(owner, page, limit, favorite);
  res.json(allContacts);
}

module.exports = getAllContactsController;
