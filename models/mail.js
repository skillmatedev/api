const mongoose = require('mongoose');

const mailSchema = new mongoose.Schema({
  senderEmail: { type: String, required: true },
  recipientEmail: { type: String, required: true },
  subject: { type: String,  },
  message: { type: String,  },
  sentAt: { type: Date, default: Date.now },
});

const Mail = mongoose.model('Mail', mailSchema);

module.exports = Mail;
