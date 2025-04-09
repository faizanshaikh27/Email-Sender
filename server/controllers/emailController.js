const { sendEmail } = require('../services/emailService');

const sendEmailController = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await sendEmail({ name, email, subject, message });
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
};

module.exports = { sendEmailController };
