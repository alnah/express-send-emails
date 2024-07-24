const nodemailer = require("nodemailer");
const { StatusCodes } = require("http-status-codes");

const sendEmail = async (req, res, next) => {
  await nodemailer.createTestAccount();

  // in production:
  // - you should use postmark package;
  // - host, post, user and pass should be in .env
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'zelma.swaniawski55@ethereal.email',
        pass: 's5z4uV2qnbys7dH2xq'
    }
});

  const message = {
    from: "alnah <alexis.nahan@gmail.com>",
    to: "alnah <alexis.nahan@gmail.com>",
    subject: "Sending an email from my Express.js server",
    html: "<h1> Hello, Express.js!</h1>",
  };

  const info = await transporter.sendMail(message);
  res
    .status(StatusCodes.OK)
    .json({ info });
};

module.exports = { sendEmail };
