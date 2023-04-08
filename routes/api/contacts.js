const express = require("express");
const {
  getContactsController,
  getContactbyIdController,
  addContactController,
  updateContactController,
  updateStatusContactController,
  removeContactController,
} = require("../../controllers");
const { validateBody } = require("../../middlewares");
const { editSchema, updateFavoriteSchema } = require("../../schemas");

const router = express.Router();

router.get("/", getContactsController);

router.get("/:id", getContactbyIdController);

router.post("/", validateBody(editSchema), addContactController);

router.put("/:id", validateBody(editSchema), updateContactController);

router.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  updateStatusContactController
);

router.delete("/:id", removeContactController);

module.exports = router;
