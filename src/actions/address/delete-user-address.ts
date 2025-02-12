'use server';

import { prisma } from "@/lib/prisma";

export const deleteUserAddress = async( userId: string ) => {
    console.log("reciviendo para eliminar",{userId})
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
        console.log("Valor de 'error' antes de console.error:", error); // <-- Añade esta línea
        console.error("Error en Server Action deleteUserAddress:", error);
        console.log("Objeto de error completo:", JSON.stringify(error, null, 2));
        return {
            ok: false,
            message: 'No se pudo borrar la dirección'
        }

    }
}