const { updateContact } = require("../../services");
const { inspectBody, HttpError } = require("../../utils");

async function updateContactController(req, res) {
  inspectBody(req.body);
  const updatedContact = await updateContact(req.params.id, req.body);

  if (!updatedContact) {
    throw HttpError(404, `Contact with ID:${req.params.id} not found`);
  }

  res.json(updatedContact);
}

module.exports = updateContactController;
