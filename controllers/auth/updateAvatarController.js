const { processAvatar } = require("../../services");

async function updateAvatarController(req, res) {
  const { _id } = req.user;
  const { path: tempPath, filename } = req.file;

  const avatarUrl = await processAvatar(_id, tempPath, filename);

  await res.json({ avatarUrl });
}

module.exports = { updateAvatarController };
