'use server';

import { connectToDb } from '@/databaseConnect/dbConnect';
import { User } from '@/app/models/User';
import bcrypt from 'bcryptjs';
import { signIn, signOut } from '../auth';

connectToDb();

export const register = async (prevState: any, formData: any) => {
  const { name, email, password, confirmPassword } = Object.fromEntries(formData);
  console.log(password.length);
  if (password !== confirmPassword) {
    return { error: 'Password Mismatch' };
  } else if (password.length < 8) {
    return { error: 'Password must be at least 8 characters' };
  } else {
    try {
      connectToDb();

      const user = await User.findOne({ email });

      if (user) {
        return { error: 'User already exists' };
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        fullName: name,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      console.log('Saved to db');
      return { success: true };
    } catch (error: any) {
      console.log(error);
      return { error: 'Something went wrong' };
    }
  }
};

export const login = async (prevState: any, formData: any) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { email, password });
  } catch (error: any) {
    // if (error.message.includes("CredentialsSignin")) {
    //   return { error: "Invalid username or password" };
    // }

    if (error.type === 'CredentialsSignin') {
      return { error: 'Invalid username or password' };
    }

    // return { error: "Something went wrong" };

    throw error;
  }
};

export const handleGithubLogin = async () => {
  'use server';

  await signIn('github');
};

export const handleLogout = async () => {
  'use server';
  await signOut();
};
