'use server'
import { prisma } from "@/lib/prisma";
import { Gender } from "@prisma/client";

export const getProductByTerm = async( term: string )=> {
    if (!term.trim()) return [];
    const decodedTerm = decodeURIComponent(term.trim());

    try {
        const products = await prisma.product.findMany({
            where: {
                OR: [
                    { title: { contains: decodedTerm, mode: 'insensitive' } },
                ]
            },
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            },
        });

        return products.map(product => ({
                ...product,
                images: product.ProductImage.map( image => image.url )
            }))

    } catch (error) {
        console.error('Error en búsqueda:', error)
        return []
    }
}