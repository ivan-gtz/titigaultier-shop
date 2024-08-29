"use server";
import * as z from 'zod';
import { ResetSchema } from "@/schemas";
import { getUserByEmail } from '../user/get-user';
import { generatePasswordResetToken } from '@/lib/tokens';
import { sendPasswordResetEmail } from '@/lib/mail';

export const reset = async( values: z.infer<typeof ResetSchema> ) => {

    const validatedFields = ResetSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid email!"};
    }

    const { email } = validatedFields.data;

    const existingUser = await getUserByEmail( email );

    if (!existingUser) {
        return { error: "¡Email no encontrado!"}
    }

    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token,
    )

    return { success: "¡Email para restablecer enviado!"};
}