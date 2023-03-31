const express = require("express");
const Joi = require("joi");
const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../../models");
const { HttpError } = require("../../helpers");

const router = express.Router();

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(
      /^(?!\+.*\(.*\).*--.*$)(?!\+.*\(.*\).*-$)(\([0-9]{3}\) [0-9]{3}[-]{1}[0-9]{4})$/
    )
    .required()
    .messages({
      "any.required": `"phone" field is required `,
      "string.base": `"phone" must be a string`,
      "string.pattern.base": `"phone" string must include only numbers and be on format (XXX) XXX-XXXX`,
    }),
});

router.get("/", async (req, res, next) => {
  try {
    const allContacts = await listContacts();
    res.json(allContacts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await getContactById(id);

    if (!contact) {
      throw HttpError(404, `Contact with id ${id} not found`);
    }

    res.json(contact);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const newContact = await addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { id } = req.params;
    const updatedContact = await updateContact(id, req.body);
    if (!updatedContact) {
      throw HttpError(404, `Contact with id ${id} not found`);
    }
    res.json(updatedContact);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const removedContact = await removeContact(id);
    if (!removedContact) {
      throw HttpError(404, `Contact with id ${id} not found`);
    }
    res.json(removedContact);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
