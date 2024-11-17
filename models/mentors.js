const mongoose = require("mongoose");
const { Schema } = mongoose;
const SlotSchema = require("./slot"); // Import SlotSchema correctly

const MentorSchema = new Schema(
  {
    fullname: { type: String, default: "" },
    first_name: { type: String, default: "" },
    last_name: { type: String, default: "" },
    display_name: { type: String, default: "" },
    username: { type: String, default: "" },
    phone: { type: String, default: "" },
    propic: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    specialization: { type: String, default: "" },
    linkedinUrl: { type: String, default: "" },
    whatsappNumber: { type: String, default: "" },
    offers: { type: [String], default: [] },
    services: { type: [String], default: [] },
    expertise: { type: String, default: "" },
    other_expertise: { type: String, default: "" },
    popularServices: { type: [String], default: [] },
    duration: { type: String, default: "" },
    ratings_count: { type: Number, default: 0 },
    about: { type: String, default: "" },
    registration_intent: { type: String },
    slot: { type: [SlotSchema], default: [] }, // Use SlotSchema here
  },
  { timestamps: true }
);

// Index on fullname for text search
MentorSchema.index({ fullname: "text" });

const MentorModel = mongoose.model("Mentor", MentorSchema);

module.exports = MentorModel;
