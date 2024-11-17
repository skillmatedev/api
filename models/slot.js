const mongoose = require("mongoose");
const { Schema } = mongoose;

const SlotSchema = new Schema(
  {
    slot: [
      {
        day: { type: String, required: true },
        time: [
          {
            from: { type: String, required: true },
            to: { type: String, required: true },
            _id: false,
          },
        ],
      },
    ],
    mentorId: { type: Schema.Types.ObjectId, ref: 'Mentor', required: true },
    mentorEmail: { type: String, required: true },
    isBooked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Export SlotSchema for reuse in other schemas
module.exports = SlotSchema;
