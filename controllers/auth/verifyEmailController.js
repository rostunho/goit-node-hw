const { findUserByVerificationToken } = require("../../services");

async function verifyEmailController(req, res) {
  const { verificationToken } = req.params;

  await findUserByVerificationToken(verificationToken);

  res.json({
    message: "Verification successful",
  });
}

module.exports = { verifyEmailController };
