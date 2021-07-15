const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema(
  {
    title: {
      type: String,
      required:"title is required",
    },
    details: {
      type: String,
      required:"details of notes is required",
    },
    category: {
      type: String,
      required:"category of notes is required",
    },
  },
  {
    timestamps: true,
  }
)

const Notes = mongoose.model("Notes", notesSchema);
module.exports = { Notes };