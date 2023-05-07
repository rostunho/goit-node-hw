const nodemailer = require("nodemailer");
require("dotenv").config();

const nodeMailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "rostunho@meta.ua",
    pass: process.env.META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodeMailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "rostunho@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = { sendEmail };
