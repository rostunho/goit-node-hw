const express = require("express");
const {
  getContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  updateStatusContactController,
  removeContactController,
} = require("../../controllers");
const { authenticate, validateBody } = require("../../middlewares");
const { editContactSchema, updateFavoriteSchema } = require("../../schemas");

const router = express.Router();

router.get("/", authenticate, getContactsController);

router.get("/:id", authenticate, getContactByIdController);

router.post(
  "/",
  authenticate,
  validateBody(editContactSchema),
  addContactController
);

router.put(
  "/:id",
  authenticate,
  validateBody(editContactSchema),
  updateContactController
);

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(updateFavoriteSchema),
  updateStatusContactController
);

router.delete("/:id", authenticate, removeContactController);

module.exports = router;
