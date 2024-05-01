import mongoose from "mongoose";
import { ConnectionType } from "@/Types/Connection";

const connection: ConnectionType = {
  isConnected: false,
};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect("mongodb://0.0.0.0:27017/");
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected");
  } catch (error) {
    console.log(error);
    // throw new Error(error);
  }
};
