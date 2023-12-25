import nodemailer from "nodemailer";

export const sendEmail = (email, link) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: "Digital Shop Admin<Support>",
    to: "duongbvph30579@fpt.edu.vn",
    subject: "Verify email",
    text: `Please click on the below link to verify, expired after 1 minutes!\n\n${link}\n\n`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
