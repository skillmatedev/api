const mongoose = require('mongoose');

const denySchema = new mongoose.Schema({
  recipientEmail: { type: String, required: true },
  fullname: { type: String, required: true },
  comment: { type: String,  },
  sentAt: { type: Date, default: Date.now },
});

const Deny = mongoose.model('Deny', denySchema);

module.exports = Deny;
