"use server"
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const syncFavorite = async(tempFavorites: string[]) => {

    const session = await auth();
    const userId = session?.user.id;
    if ( !userId ) {
        return {
            ok: false,
            message: 'No autenticado'
        }
    }
    if (tempFavorites.length === 0) {
      return { 
        ok: true, 
        message: "No hay favoritos temporales para sincronizar" 
      } 
    }
    try {
      await prisma.$transaction(
          tempFavorites.map(productId =>
            prisma.favoriteProduct.upsert({
              where: {
                userId_productId: {
                  productId,
                  userId
                }
              },
              create: {
                productId,
                userId,
              },
              update: {}
            })
          )
      );
      return { 
        ok: true, 
        message: "Favoritos sincronizados exitosamente" 
      }
      
    } catch (error: any) {
      console.log(error);
      return {
          ok: false,
          message: '500 - Error al cargar favoritos'
      }
    }
}