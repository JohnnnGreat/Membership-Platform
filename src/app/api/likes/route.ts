import { NextRequest, NextResponse } from "next/server";
// import { connectToDb } from "../../../databaseConnection/connectToDb.ts";
import { Post } from "@/app/models/Post";
import { connectToDb } from "@/databaseConnect/dbConnect";

export const POST = async (request: NextRequest) => {
  try {
    connectToDb();
    const body = await request.json();
    console.log(body);
    const post = await Post.findById(body);

    // Increment the likes
    post.likes++;

    // Save the updated post
    await post.save();
    return NextResponse.json("success");
  } catch (err) {
    console.log(err);
  }
};
