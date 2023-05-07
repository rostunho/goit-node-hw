// const { User } = require("../../models");
// const { HttpError } = require("../../utils");
// const { sendEmail } = require("../../helpers");
// require("dotenv").config();

const { sentUserNewVerificationEmail } = require("../../services");

// const { BASE_URL } = process.env;

async function resendVerifyEmailController(req, res) {
  const { email } = req.body;

  await sentUserNewVerificationEmail(email);

  res.json({ message: "Verification email sent" });
}

module.exports = { resendVerifyEmailController };
