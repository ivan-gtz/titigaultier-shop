"use server"
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const addToFavorite = async(productId: string) => {

    const session = await auth();
    const userId = session?.user.id;
    if ( !userId ) {
        return {
            ok: false,
            message: 'Debes iniciar sesión para agregar favoritos'
        }
      }

      try {
        const favoriteProduct = await prisma.favoriteProduct.create({
            data: {
                productId,
                userId
            }, 
            include: { product: true }
        });
        return {
            ok: true,
            favoriteProduct: favoriteProduct.product,
        }
        
      } catch (error: any) {
        console.log(error);
        return {
            ok: false,
            message: '500 - Error al agregar a favoritos'
        }
      }

}