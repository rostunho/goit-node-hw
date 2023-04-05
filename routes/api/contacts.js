const express = require("express");
const {
  getContactsController,
  getContactbyIdController,
  addContactController,
  updateContactController,
  removeContactController,
} = require("../../controllers");
const { contactSchema } = require("../../schemas");
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", getContactsController);

router.get("/:id", getContactbyIdController);

router.post("/", validateBody(contactSchema), addContactController);

router.put("/:id", validateBody(contactSchema), updateContactController);

router.delete("/:id", removeContactController);

module.exports = router;
