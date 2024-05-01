import bcrypt from 'bcryptjs';
import { connectToDb } from '@/databaseConnect/dbConnect';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { User } from '@/app/models/User';
import { authConfig } from './auth.config';
// import CredentialsProvider from "next-auth/providers/credentials";
import Credentials from 'next-auth/providers/credentials';
// import credentials from "next-auth/providers/credentials";

const login = async (credentials: any) => {
  try {
    connectToDb();
    // console.log(credentials);
    const user = await User.findOne({ email: credentials.email });
    if (!user) {
      throw new Error('User not found');
    } else {
      const isPassword = await bcrypt.compare(credentials.password, user.password);

      if (!isPassword) {
        throw new Error('password is incorrect');
      } else {
        return user;
      }
    }
  } catch (error) {
    throw new Error('Failed to Login');
  }
};
export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      authorize: async (credentials: any) => {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'github') {
        connectToDb();
        console.log(account);
        try {
          const user = await User.findOne({ email: profile?.email });

          if (!user) {
            const newUser = new User({
              email: profile?.email,
              fullName: profile?.login,
              image: profile?.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          return false;
        }
      }
      return true;
    },

    ...authConfig.callbacks,
  },
});
