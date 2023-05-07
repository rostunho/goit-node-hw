const express = require("express");
const {
  registerSchema,
  emailSchema,
  loginSchema,
  updateUserStatusSchema,
} = require("../../schemas");
const { authenticate, validateBody, upload } = require("../../middlewares");
const {
  registerController,
  verifyEmailController,
  resendVerifyEmailController,
  loginController,
  getCurrentUserController,
  updateUserStatusController,
  updateAvatarController,
  logoutController,
} = require("../../controllers");

const router = express.Router();

router.post("/register", validateBody(registerSchema), registerController);

router.get("/verify/:verificationToken", verifyEmailController);

router.post("/verify", validateBody(emailSchema), resendVerifyEmailController);

router.post("/login", validateBody(loginSchema), loginController);

router.patch(
  "/",
  authenticate,
  validateBody(updateUserStatusSchema),
  updateUserStatusController
);

router.get("/current", authenticate, getCurrentUserController);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatarController
);

router.post("/logout", authenticate, logoutController);

module.exports = router;
