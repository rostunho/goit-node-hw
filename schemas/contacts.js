const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": `missing required "name" field` }),
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": `missing required "email" field` }),
  phone: Joi.string()
    .pattern(
      /^(?!\+.*\(.*\).*--.*$)(?!\+.*\(.*\).*-$)(\([0-9]{3}\) [0-9]{3}[-]{1}[0-9]{4})$/
    )
    .required()
    .messages({
      "any.required": `missing required "email" field`,
      "string.base": `"phone" must be a string`,
      "string.pattern.base": `"phone" string must include only numbers and be on format (XXX) XXX-XXXX`,
    }),
});

module.exports = { contactSchema };
