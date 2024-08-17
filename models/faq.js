const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  
  email: { type: String, required: true },
  name: { type: String, },
  message: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
});

const Faq = mongoose.model('Faq', faqSchema);

module.exports = Faq;
