'use server';

import { prisma } from "@/lib/prisma";

export const deleteUserAddress = async( userId: string ) => {
    try {
        await prisma.userAddress.delete({
            where: {
                userId
            }
        })

        return {
            ok: true,
            message: 'se eliminó la dirección'
        }

    } catch (error: any) {
        console.log("Mensaje de error:", error.message);
        console.log("Código de error:", error.code);
        return {
            ok: false,
            message: 'No se pudo borrar la dirección'
        }

    }
}