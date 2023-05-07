const { editContactSchema, updateFavoriteSchema } = require("./contacts");
const {
  registerSchema,
  emailSchema,
  loginSchema,
  updateUserStatusSchema,
} = require("./user");

module.exports = {
  editContactSchema,
  updateFavoriteSchema,
  registerSchema,
  emailSchema,
  loginSchema,
  updateUserStatusSchema,
};
