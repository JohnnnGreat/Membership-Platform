import { NextRequest, NextResponse } from "next/server";
// import { connectToDb } from "../../../databaseConnection/connectToDb.ts";
import { Post } from "@/app/models/Post";
import { connectToDb } from "@/databaseConnect/dbConnect";

export const POST = async (request: NextRequest) => {
  try {
    connectToDb();
    const body = await request.json();
    console.log(body);
    // const posts = await Post.find();

    const post = new Post(body);

    await post.save();

    return NextResponse.json({
      message: "Post saved successfully",
      success: true,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const GET = async () => {
  connectToDb();
  try {
    const posts = await Post.find()
      .sort({ _id: -1 })
      .populate([
        {
          path: "user",
        },
      ]);
    return NextResponse.json(posts);
  } catch (error) {
    throw new Error("Failed to fetch posts!");
  }
};
