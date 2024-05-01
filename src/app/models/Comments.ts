import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },

  text: {
    type: String,
    required: true,
  },
});

export const Comments = mongoose.model("Comments", commentsSchema);
