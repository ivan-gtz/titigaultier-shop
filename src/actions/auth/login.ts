'use server'
import { LoginSchema } from '@/schemas';
import * as z from 'zod';
import { signIn } from '../../auth';
import { AuthError } from 'next-auth';
import { getUserByEmail } from '../user/get-user';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!"
    };  
  }
  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if ( !existingUser || !existingUser.email || !existingUser.password ) {
      return { error: "¡El email no está registrado!" }
  }
  // if (!existingUser.emailVerified) {
  //   return { success: "Confirmation email sent!"}
  // }
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
    return {
      ok: true,
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {error: "¡Usuario o contraseña incorrectos!"}
        default:
          return {error: "¡Ocurrió un error!"}
      }
    }
    throw error;
  }
}