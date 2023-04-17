const express = require("express");
const {
  getAllContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  updateContactStatusController,
  removeContactController,
} = require("../../controllers");
const { authenticate, validateBody } = require("../../middlewares");
const { editContactSchema, updateFavoriteSchema } = require("../../schemas");

const router = express.Router();

router.get("/", authenticate, getAllContactsController);

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
  updateContactStatusController
);

router.delete("/:id", authenticate, removeContactController);

module.exports = router;
