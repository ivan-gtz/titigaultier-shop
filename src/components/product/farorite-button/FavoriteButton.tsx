'use client';

import { Product } from "@/interfaces";
import { useFavoriteStore } from "@/store";
import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";

interface Props {
    favorite: Product;
    className?: string;
  }

export const FavoriteButton = ({ favorite, className ='' }: Props) => {

    const { status } = useSession();

    const tempFavorites = useFavoriteStore(state => state.tempFavorites);
    const favorites = useFavoriteStore(state => state.favorites);
    const toggleFavorite = useFavoriteStore(state => state.toggleFavorite);
    const loading = useFavoriteStore(state => state.loading);
    const productId = favorite.id
    const isAuthenticated = status === 'authenticated';
    const isFavorite = isAuthenticated 
    ? favorites.some( f => f.id === productId )
    : tempFavorites.some( tempFav => tempFav.id === productId );

    return (
        <button
            onClick={() => toggleFavorite(favorite, isAuthenticated)}
            disabled={ loading }
            className={`${className} cursor-pointer bg-white/70 bg-opacity-70 shadow-2xl border border-gray-100 rounded-full outline-offset-0 transition-transform duration-300 hover:scale-110 p-2`}
        >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
            <span className="sr-only">Add to favorites</span>
        </button>
    );
}