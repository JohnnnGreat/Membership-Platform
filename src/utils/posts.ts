"use server";

import { Post } from "@/app/models/Post";
import { connectToDb } from "@/databaseConnect/dbConnect";

export const getPosts = async () => {
  connectToDb();
  try {
    const posts = await Post.find().populate([
      {
        path: "user",
      },
    ]);
    return posts;
  } catch (error) {
    throw new Error("Failed to fetch posts!");
  }
};
