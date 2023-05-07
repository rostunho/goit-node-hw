const Joi = require("joi");
const { emailRegex } = require("../utils");

const registerSchema = Joi.object({
  name: Joi.string(),
  // .required()
  // .messages({ "any.required": `missing required "name" field` }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ "any.required": "Set password for user" }),
  email: Joi.string().pattern(emailRegex).required().messages({
    "any.required": `"email" field is required and should be a valid email address`,
    "string.pattern.base": `"email" should be a valid email address`,
  }),
  subscription: Joi.string()
    .valid("starter", "pro", "business")
    .default("starter"),
  token: Joi.string(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required().messages({
    "any.required": `"email" field is required and should be a valid email address`,
    "string.pattern.base": `"email" should be a valid email address`,
  }),
});

const loginSchema = Joi.object({
  password: Joi.string()
    .min(6)
    .required()
    .messages({ "any.required": "Set password for user" }),
  email: Joi.string().pattern(emailRegex).required().messages({
    "any.required": `"email" field is required and should be a valid email address`,
    "string.pattern.base": `"email" should be a valid email address`,
  }),
});

const updateUserStatusSchema = Joi.object({
  subscription: Joi.string()
    .valid("starter", "pro", "business")
    .required()
    .messages({ "any.required": `Subscription field is required` }),
});

module.exports = { registerSchema, emailSchema, loginSchema, updateUserStatusSchema };
