const { Schema, model } = require("mongoose");
const { handleConflictError } = require("../middlewares");
const { emailRegex } = require("../utils");

const userSchema = new Schema({
  name: {
    type: String,
    // required: [true, "Set name for contact"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [emailRegex, "Set valid email for contacts"],
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
  token: String,
});

userSchema.post("save", handleConflictError);

const User = model("user", userSchema);

module.exports = { User };
