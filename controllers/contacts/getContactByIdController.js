const { getContactbyId } = require("../../services");
const { validateId, HttpError } = require("../../utils");

async function getContactByIdController(req, res) {
  const { id } = req.params;
  validateId(id);
  const contact = await getContactbyId(id);

  if (!contact) {
    throw HttpError(404, `Contact with ID:${id} not found`);
  }

  res.json(contact);
}

module.exports = getContactByIdController;
