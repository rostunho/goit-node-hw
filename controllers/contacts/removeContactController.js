const { removeContact } = require("../../services");

async function removeContactController(req, res) {
  const { id } = req.params;
  await removeContact(id);
  res.json({ message: `Contact with ID ${id} deleted` });
}

module.exports = removeContactController;
