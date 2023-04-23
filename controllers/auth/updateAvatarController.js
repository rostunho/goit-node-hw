const { processAvatar } = require("../../services");
// const path = require("path");
// const Jimp = require("jimp");
// const { User } = require("../../models");

// const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

async function updateAvatarController(req, res) {
  const { _id } = req.user;
  const { path: tempPath, filename } = req.file;

  const avatarUrl = await processAvatar(_id, tempPath, filename);

  await res.json({ avatarUrl });
}

module.exports = { updateAvatarController };
