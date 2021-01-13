import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    maxLength: [50, "Max length for title is 50 characters"],
    unique: true,
  },
  finished: {
    type: Boolean,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    maxLength: [255, "Max length for description is 255 characters"],
  },
});

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
