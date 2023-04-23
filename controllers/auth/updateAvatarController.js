const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

async function updateAvatarController(req, res) {
  const { _id } = req.user;
  const { path: tempUpload, filename } = req.file;

  const image = await Jimp.read(tempUpload);

  const avatarName = `${_id}_${filename}`;
  image.resize(250, 250).write(`${avatarsDir}/${avatarName}`);

  const avatarUrl = path.join("avatars", avatarName);
  await User.findByIdAndUpdate(_id, { avatarUrl });

  await res.json({ avatarUrl });
}

module.exports = { updateAvatarController };
