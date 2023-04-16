const express = require("express");
const { registerController } = require("../../controllers");
const { validateBody } = require("../../middlewares");
const { registerSchema } = require("../../schemas");

const router = express.Router();

router.post("/register", validateBody(registerSchema), registerController);

module.exports = router;
