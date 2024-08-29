"use server";
import { prisma } from '@/lib/prisma';
import { NewPasswordSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import * as z from 'zod';
import { getUserByEmail } from '../user/get-user';
import { getPasswordResetTokenByToken } from '../user/password-reset-token';

export const newPassword = async ( values: z.infer<typeof NewPasswordSchema>, token?: string | null) => {

    if (!token) {
        return { error: "¡Falta el token!"};
    }

    const validatedFields = NewPasswordSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!"};
    }

    const { password } = validatedFields.data;

    const existingToken = await getPasswordResetTokenByToken(token);

    if (!existingToken) {
        return { error: "¡Token inválido!"};
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
        return { error: "¡Token ha expirado!"}
    }

    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) {
        return { error: "¡El correo no existe!"}
    }

    const hashedPassword = await bcrypt.hashSync( password, 10 );

    await prisma.user.update({
        where: { id: existingUser.id },
        data: { password: hashedPassword }
    })
    await prisma.passwordResetToken.delete({
        where:{ id: existingToken.id }
    });

    return { success: "¡Contraseña actualizada!"}
}