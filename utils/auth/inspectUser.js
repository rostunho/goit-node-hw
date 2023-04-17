const bcrypt = require("bcryptjs");
const { HttpError } = require("../common");

async function checkPassword(user, password) {
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Controller. Unzuthorized: password is wrong");
  }

  return passwordCompare;
}

module.exports = { checkPassword };
