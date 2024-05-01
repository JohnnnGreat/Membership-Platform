import { UserType } from "@/Types/user";
import { connectToDb } from "@/databaseConnect/dbConnect";
import { User } from "@/app/models/User";

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};
