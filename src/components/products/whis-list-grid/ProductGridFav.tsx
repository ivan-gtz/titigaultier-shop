'use client';
import { useSession } from "next-auth/react";
import { ProductGridItemFav } from "./ProductGridItemFav";
import { useFavoriteStore } from "@/store";
import { EmptyFavorites } from "./EmptyFavorites";


export const ProductGridFav = () => {
    const { status } = useSession();
    const favoritesDB = useFavoriteStore(state => state.favorites);
    const tempFavorites = useFavoriteStore(state => state.tempFavorites);
    const favorites = status === 'authenticated' ? favoritesDB : tempFavorites;

    if (favorites.length === 0) {
        return (
            <EmptyFavorites />
        )
    }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {
            favorites.map( product => (
                <ProductGridItemFav 
                    key={ product.slug } 
                    product={ product }
                />
            ))
        }
    </div>
  )
}