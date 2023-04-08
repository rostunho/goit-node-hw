const { Schema, model } = require("mongoose");
const { handleSaveError, handleNotFoundError } = require("../middlewares");
const { emailRegex, phoneRegex } = require("../utils");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
    match: [emailRegex, "Set valid email for contacts"],
    required: [true, "Set email for contact"],
  },
  phone: {
    type: String,
    match: [phoneRegex, "phone must be on format (XXX) XXX-XXXX"],
    required: [true, "Set phone for contact"],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

contactSchema.post("save", handleSaveError);
contactSchema.post("findOne", handleNotFoundError);
contactSchema.post("findOneAndUpdate", handleNotFoundError);
contactSchema.post("findOneAndDelete", handleNotFoundError);

const Contact = model("contacts", contactSchema);

module.exports = { Contact };
