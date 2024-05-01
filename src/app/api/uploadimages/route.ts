import DatauriParser from "datauri/parser";
import { NextRequest, NextResponse } from "next/server";
import { cloudinary } from "@/databaseConnect/cloudinaryConfigs";

export const POST = async (req: NextRequest) => {
  "use server";
  const formData = await req.formData();
  const file = formData.get("file") as File;

  const fileBuffer = await file.arrayBuffer();

  const mimeType = file.type;
  const encoding = "base64";
  const base64Data = Buffer.from(fileBuffer).toString("base64");

  const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

  try {
    const result = await cloudinary.uploader.upload(fileUri, {
      resource_type: "auto",
    });
    const { secure_url } = result;
    return NextResponse.json({ success: true, url: secure_url });
  } catch (error) {
    console.log(error);
  }
};
