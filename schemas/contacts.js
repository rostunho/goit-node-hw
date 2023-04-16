const Joi = require("joi");
const { registerSchema } = require("./user");
const { phoneRegex, emailRegex } = require("../utils");

const editContactSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": `missing required "name" field` }),
  email: Joi.string()
    .pattern(emailRegex)
    .required()
    .messages({ "any.required": `missing required "email" field` }),
  phone: Joi.string().pattern(phoneRegex).required().messages({
    "any.required": `missing required "phone" field`,
    "string.base": `"phone" must be a string`,
    "string.pattern.base": `"phone" string must include only numbers and be on format (XXX) XXX-XXXX`,
  }),
  favorite: Joi.boolean(),
  owner: Joi.string().ref(registerSchema),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": `missing required "favorite" field` }),
});

module.exports = { editContactSchema, updateFavoriteSchema };
