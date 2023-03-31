const Joi = require("joi");
const { HttpError } = require("./HttpError");

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

function validateBody(body) {
  const { error } = addSchema.validate(body);
  if (error) {
    throw HttpError(400, error.message);
  }
}

function inspectContact(contact, id) {
  if (!contact) {
    throw HttpError(404, `Contact with id ${id} not found`);
  }
}

module.exports = { validateBody, inspectContact };
