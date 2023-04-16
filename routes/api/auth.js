const express = require("express");
const { registerController, loginController } = require("../../controllers");
const { validateBody } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../schemas");

const router = express.Router();

router.post("/register", validateBody(registerSchema), registerController);

router.post("/login", validateBody(loginSchema), loginController);
// router.post("/login", loginController);

module.exports = router;
