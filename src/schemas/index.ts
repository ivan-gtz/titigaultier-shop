import * as z from 'zod';

export const NewPasswordSchema = z.object({
    password: z.string().min(6,{
        message: "Requiere mínimo 6 caracteres"
    }),
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email es requerido"
    }),
    password: z.string().min(6, {
        message: "Contraseña es requerido"
    }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email es requerido"
    }),
    password: z.string().min(6, {
        message: "Requiere mínimo 6 caracteres"
    }),
    name: z.string().min(1, {
        message: "Nombre es requerido"
    })
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email es requerido"
    }),
});

