const { updateContact } = require("../../services");
const { inspectStatus, validateId, HttpError } = require("../../utils");

async function updateContactStatusController(req, res) {
  inspectStatus(req.body);
  validateId(req.params.id);
  const updatedStatus = await updateContact(req.params.id, req.body);

  if (!updatedStatus) {
    throw HttpError(404, `Contact with ID:${req.params.id} not found`);
  }

  res.json(updatedStatus);
}

module.exports = updateContactStatusController;
