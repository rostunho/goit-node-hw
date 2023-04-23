const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const { nanoid } = require("nanoid");
const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

async function updateAvatarController(req, res) {
  // console.log(req.user);
  console.log(req.file);
  const { _id } = req.user;
  const { path: tempUpload, filename } = req.file;

  const avatarName = `${_id}_${filename}`;

  const uploadedFile = path.join(avatarsDir, avatarName);
  console.log("uploaded file:", uploadedFile);

  await fs.rename(tempUpload, uploadedFile);

  const avatarUrl = path.join("avatars", avatarName);
  await User.findByIdAndUpdate(_id, { avatarUrl });

  await res.json({ avatarUrl });
}

module.exports = { updateAvatarController };
