const { getContactbyId } = require("../../services");

async function getContactByIdController(req, res) {
  const { id } = req.params;
  const contact = await getContactbyId(id);
  res.json(contact);
}

module.exports = getContactByIdController;
