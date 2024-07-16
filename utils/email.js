// Import the nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // Email service provider
  auth: {
    user: process.env.EMAIL, // Your email address from environment variables
    pass: process.env.EMAIL_PASSWORD, // Your email password from environment variables
  },
});

/**
 * Sends an email using the specified parameters.
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} text - The text content of the email.
 */
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL, // Sender's email address
    to, // Recipient's email address
    subject, // Subject of the email
    text, // Text content of the email
  };

  // Send the email using the transporter object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error); // Log any errors
    } else {
      console.log('Email sent: ' + info.response); // Log the response if the email was sent successfully
    }
  });
};

// Export the sendEmail function to be used in other parts of the application
module.exports = sendEmail;
