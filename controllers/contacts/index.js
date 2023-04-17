const { asyncWrapper } = require("../../utils");
const getAllContactsController = require("./getAllContactsController");
const getContactByIdController = require("./getContactByIdController");
const addContactController = require("./addContactController");
const updateContactController = require("./updateContactController");
const updateContactStatusController = require("./updateContactStatusController");
const removeContactController = require("./removeContactController");

module.exports = {
  getAllContactsController: asyncWrapper(getAllContactsController),
  getContactByIdController: asyncWrapper(getContactByIdController),
  addContactController: asyncWrapper(addContactController),
  updateContactController: asyncWrapper(updateContactController),
  updateContactStatusController: asyncWrapper(updateContactStatusController),
  removeContactController: asyncWrapper(removeContactController),
};
