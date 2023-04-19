const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

async function updateAvatarController(req, res) {
  const { _id } = req.user;
  const { path: tempUpload, filename } = req.file;

  const uploadedFile = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, uploadedFile);

  const avatarUrl = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarUrl });

  await res.json({ avatarUrl });
}

module.exports = { updateAvatarController };
