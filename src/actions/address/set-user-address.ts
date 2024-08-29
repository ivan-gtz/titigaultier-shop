'use server';

import type { Address } from '@/interfaces';
import { prisma } from '@/lib/prisma';


export const setUserAddress = async (address: Address, userId: string) => {
    try {

        const newAddress = await createOrReplaceAddress( address, userId );

        return {
            ok: true,
            newAddress
        }

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'No se pudo grabar la dirección'
        }

    }
}

const createOrReplaceAddress = async (address: Address, userId: string) => {
    try {
        console.log({userId});
        const storedAddress = await prisma.userAddress.findUnique({
            where: {
                userId: userId
            }
        });

        const addressToSave = {
            userId: userId,
            address: address.address,
            address2: address.address2,
            city: address.city,
            countryId: address.country,
            firstName: address.firstName,
            lastName: address.lastName,
            postalCode: address.postalCode,
            phone: address.phone,
        }

        if (!storedAddress) {
            const newAddress = await prisma.userAddress.create({
                data: addressToSave
            });
            return newAddress;
        }

        const updatedAddress = await prisma.userAddress.update({
            where: {
                userId
            },
            data: addressToSave
        })

        return updatedAddress;

    } catch (error) {
        console.log(error);
        throw new Error('No se pudo grabar la dirección')
    }

}
