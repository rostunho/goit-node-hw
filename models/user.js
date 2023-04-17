const { Schema, model } = require("mongoose");
const { handleConflictError, handleUnauthorized } = require("../utils");
const { emailRegex } = require("../utils");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [emailRegex, "Enter valid email "],
    unique: true,
  },
  password: {
    type: String,
    minLength: 6,
    required: [true, "Set password for user"],
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: "",
  },
});

userSchema.post("save", handleConflictError);
userSchema.post("findOne", handleUnauthorized);

const User = model("user", userSchema);

module.exports = { User };
