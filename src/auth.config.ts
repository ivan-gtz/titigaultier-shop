import bcrypt from 'bcryptjs';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { LoginSchema } from './schemas';
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook"
import { getUserByEmail } from './actions/user/get-user';

export default {
    providers: [
        Google,
        Facebook,
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);
                console.log(validatedFields.success)
                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;
                    const user = await getUserByEmail(email.toLocaleLowerCase());
                    if (!user || !user.password) return null;
                    const passwordsMatch = await bcrypt.compareSync(password, user.password);
                    if (passwordsMatch) {
                        const { password: _, ...restUser } = user;
                        console.log({ restUser });
                        return restUser;
                    }
                }
                return null;
            },
        }),
    ]
} satisfies NextAuthConfig

