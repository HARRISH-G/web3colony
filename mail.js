var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'web3colony@outlook.com',
    pass: 'BoobooG@73#'
  }
});

var mailOptions = {
  from: 'web3colony@outlook.com',
  to: 'harrish.g.2003@gmail.com',
  subject: 'dai na harrisha da',
  text: 'dai hi da harrish'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});