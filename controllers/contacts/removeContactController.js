const { removeContact } = require("../../services");
const { validateId, HttpError } = require("../../utils");

async function removeContactController(req, res) {
  const { id } = req.params;
  validateId(id);
  const removedContact = await removeContact(id);

  if (!removedContact) {
    throw HttpError(404, `Contact with ID:${id} not found`);
  }

  res.json({ message: `Contact with ID ${id} deleted` });
}

module.exports = removeContactController;
