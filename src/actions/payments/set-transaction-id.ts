'use server';

import { prisma } from "@/lib/prisma";


export const setTransactionId = async( orderId: string, transactionId: string ) => {

    const findOrder = await prisma.order.findUnique({where: { id: orderId }});
    if (!findOrder) {
        throw new Error('no se encontro la order');
    }

    try {
        const updatedTransactionId = await prisma.order.update({
            where: { id: orderId },
            data: {
                transactionId: transactionId
            }
        });
        return {
            ok: true,
            message: `${ updatedTransactionId.transactionId } `
        }

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'Error en la transacción'
        }
        
    }


}