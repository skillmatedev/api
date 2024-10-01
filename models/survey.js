const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  service: [{ type: String, required: true }],
  email: { type: String, required: true },
  name: { type: String },
  sentAt: { type: Date, default: Date.now },
});

const survey = mongoose.model("Survey", surveySchema);

module.exports = survey;
