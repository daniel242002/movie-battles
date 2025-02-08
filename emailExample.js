const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "danielestebanarcos.pro@gmail.com",
    pass: "rzdetkiuuxzwdjnq",
  },
});

let mailOptions = {
  from: "danielestebanarcos.pro@gmail.com",
  to: "danielestebanarcos24@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });