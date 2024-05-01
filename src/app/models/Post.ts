import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    text: {
      type: String,
    },

    image: {
      type: Array<string>,
    },

    likes: {
      type: Number,
      default: 0,
    },

    comments: {
      type: mongoose.Schema.ObjectId,
      ref: "Comments",
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    shares: {
      type: Number,
      default: 0,
    },

    date: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
