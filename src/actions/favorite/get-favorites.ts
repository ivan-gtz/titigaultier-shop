"use server"
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const getFavorites = async() => {

    const session = await auth();
    const userId = session?.user.id;
    if ( !userId ) return [];

      try {
        const favorites = await prisma.favoriteProduct.findMany({
            where: { userId },
            include: { product: {
                include: {
                  ProductImage: {
                    take: 2,
                    select: {
                      url: true
                    }
                  }
                }
              } 
            },
        });
        return favorites.map(({ product }) => ({
          ...product,
          images: product.ProductImage.map( image => image.url )
        }));
      } catch (error: any) {
        console.log(error);
        throw new Error("500 - Error al cargar favoritos");
      }
}