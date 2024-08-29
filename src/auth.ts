import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";
import { getUserById } from "./actions/user/get-user";

export const { handlers, auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
    callbacks: {
        async signIn({ user, account }) {
            // allow OAuth without email verification
            if (account?.provider !== "credentials") return true;

            // const existingUser = await getUserById(user.id ?? "");

            // Prevent sign in without email verification
            // if (!existingUser?.emailVerifield) return false;
            return true;
        },
        async session({ session, token, user }) {
            if ( token.sub && session.user ) {
                session.user.id = token.sub;
            }
            session.user = token.data as any;
            return session;
        },
        async jwt({ token, user }) {
            if (!token.sub) return token;
            const existingUser = await getUserById(token.sub);
            if (!existingUser) return token;
            if (user) {
                token.data = user;
                //add token - quit after
                token.roleDos = existingUser.role;
            }
            return token;
        }
    },
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt"},
    ...authConfig,
})