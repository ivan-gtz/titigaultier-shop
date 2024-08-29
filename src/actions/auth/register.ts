'use server';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import * as z from 'zod';
import { getUserByEmail } from '../user/get-user';
import { prisma } from '@/lib/prisma';

export const register = async( values: z.infer<typeof RegisterSchema> ) => {

    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Datos no válidos"
        }
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {error: "Este correo ya está en uso"};
    }

    try {
        const user = await prisma.user.create({
            data: {
                name,
                email: email.toLocaleLowerCase(),
                password: hashedPassword
            }
        });

        return {
            ok: true,
            user: user,
            message: 'usurio creado'
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'No sepuedo crear el usuario'
        }
    }

}