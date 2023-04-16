const { asyncWrapper } = require("../../utils");
const getContactsController = require("./getContactsController");
const getContactByIdController = require("./getContactByIdController");
const addContactController = require("./addContactController");
const updateContactController = require("./updateContactController");
const updateStatusContactController = require("./updateStatusContactController");
const removeContactController = require("./removeContactController");

module.exports = {
  getContactsController: asyncWrapper(getContactsController),
  getContactByIdController: asyncWrapper(getContactByIdController),
  addContactController: asyncWrapper(addContactController),
  updateContactController: asyncWrapper(updateContactController),
  updateStatusContactController: asyncWrapper(updateStatusContactController),
  removeContactController: asyncWrapper(removeContactController),
};
