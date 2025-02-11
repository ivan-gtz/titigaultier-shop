"use client"
import { Heart } from 'lucide-react';

export const EmptyFavorites = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 text-center">
            <Heart className="h-10 w-10 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Tu lista de deseos está vacía
            </h3>
            <p className="text-gray-500 text-sm">
            ¡Empieza a añadir tus artículos favoritos! Haz clic en el icono del corazón en las páginas de producto para agregarlos a tu lista de deseos.
            </p>
        </div>
    )
}