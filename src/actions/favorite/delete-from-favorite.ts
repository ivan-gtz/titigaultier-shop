"use server"
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const deleteFromFavorites = async(productId: string) => {

    const session = await auth();
    const userId = session?.user.id;
    if ( !userId ) {
        return {
            ok: false,
            message: 'Debes iniciar sesión para eliminar favoritos'
        }
      }

      try {
        const deleted = await prisma.favoriteProduct.delete({
            where: {
                userId_productId: {
                    productId,
                    userId,
                }
            }
        });
        return {
            ok: true,
            favoriteProduct: deleted.productId,
        }
        
      } catch (error: any) {
        console.log(error);
        return {
            ok: false,
            message: '500 - Error al elmininar de favoritos'
        }
      }

}