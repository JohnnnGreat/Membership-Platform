// import {NextResponse} fo
import { connectToDb } from "@/databaseConnect/dbConnect";
import { User } from "@/app/models/User";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectToDb();

    const users = await User.find().sort({ _id: -1 });
    console.log(users);
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(error);
  }
};
