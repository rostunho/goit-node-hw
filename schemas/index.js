const { editContactSchema, updateFavoriteSchema } = require("./contacts");
const {
  registerSchema,
  loginSchema,
  updateUserStatusSchema,
} = require("./user");

module.exports = {
  editContactSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
  updateUserStatusSchema,
};
