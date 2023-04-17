const express = require("express");
const { registerSchema, loginSchema } = require("../../schemas");
const { authenticate, validateBody } = require("../../middlewares");
const {
  registerController,
  loginController,
  getCurrentUserController,
  logoutController,
} = require("../../controllers");

const router = express.Router();

router.post("/register", validateBody(registerSchema), registerController);

router.post("/login", validateBody(loginSchema), loginController);

router.get("/current", authenticate, getCurrentUserController);

router.post("/logout", authenticate, logoutController);

module.exports = router;
