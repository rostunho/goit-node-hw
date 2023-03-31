const express = require("express");
const {
  getContactsController,
  getContactbyIdController,
  addContactController,
  updateContactController,
  removeContactController,
} = require("../../controllers");

const router = express.Router();

router.get("/", getContactsController);

router.get("/:id", getContactbyIdController);

router.post("/", addContactController);

router.put("/:id", updateContactController);

router.delete("/:id", removeContactController);

module.exports = router;
