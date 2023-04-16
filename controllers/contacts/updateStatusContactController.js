const { updateContact } = require("../../services");
const { inspectStatus, HttpError } = require("../../utils");

async function updateStatusContactController(req, res) {
  inspectStatus(req.body);
  const updatedStatus = await updateContact(req.params.id, req.body);
  if (!updatedStatus) {
    throw HttpError(404, `Contact with ID:${req.params.id} not found`);
  }
  res.json(updatedStatus);
}

module.exports = updateStatusContactController;
