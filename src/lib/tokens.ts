import { v4 as uuid } from "uuid";
import { prisma } from "./prisma";
import { getPasswordResetTokenByEmail } from "@/actions/user/password-reset-token";

export const generatePasswordResetToken = async (email: string) => {
    const token = uuid();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await getPasswordResetTokenByEmail(email);
    if (existingToken) {
        await prisma.passwordResetToken.delete({
            where: { id: existingToken.id }
        });
    }
    const passwordResetToken = await prisma.passwordResetToken.create({
        data: {
            email,
            token,
            expires
        }
    });
    return passwordResetToken;
}
