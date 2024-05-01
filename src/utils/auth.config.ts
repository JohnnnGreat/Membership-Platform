// import { NextAuthOption } from "next-auth";

import { redirect } from 'next/dist/server/api-utils';

export const authConfig = {
  pages: {
    signIn: '/auth',
  },

  providers: [],
  callbacks: {
    session: async (payload: any) => {
      const { session, token } = payload;

      console.log('token', token);

      return token;
    },
    authorized: (data: any) => {
      const { auth, request } = data;

      const user = auth?.user;
      console.log(user);
      const isOnDashboardPage = request?.nextUrl?.pathname.startsWith('/dashboard');
      const isOnAdminPage = request?.nextUrl?.pathname.startsWith('/admin');
      const AuthPage = request?.nextUrl?.pathname.startsWith('/auth');
      if (isOnDashboardPage && !user) {
        return false;
      }

      if (AuthPage && user) {
        return Response.redirect(new URL('/', request.nextUrl));
      }
      if (isOnAdminPage && !user?.isAdmin) {
        return false;
      }
      return true;
    },
  },
};
