'use client'
import { FavoriteButton } from "@/components/product/farorite-button/FavoriteButton";
import { parFont } from "@/config/fonts";
import { Product } from "@/interfaces"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
    product: Product;
}

export const ProductGridItem = ({ product }: Props) => {

    const [displayImage, setDisplayImage] = useState(product.images[0]);
    
    const getImageUrl = (imagePath: string) => {
        // Si la imagen ya es una URL completa (http o https)
        if (imagePath.startsWith('http')) {
            return imagePath;
        }
        // Si es una imagen local
        return `/products/${imagePath}`;
    };


    return (
        <div className="rounded-lg overflow-hidden fade-in">
            <Link href={`/product/${product.slug}`}>
                <Image
                    src={getImageUrl(displayImage)}
                    alt={product.title}
                    className="w.full object-cover rounded-lg drop-shadow-xs hover:drop-shadow-sm hover:duration-150"
                    width={500}
                    height={500}
                    onMouseEnter={() => setDisplayImage(product.images[1])}
                    onMouseLeave={() => setDisplayImage(product.images[0])}
                />
            </Link>
            <div className={`${parFont.className} pt-2 flex justify-between text-sm font-normal`}>
                <div className="mr-1 order-first">
                    <h3>
                        <Link
                            href={`/product/${product.slug}`}
                            
                        >
                            {product.title}
                        </Link>
                    </h3>
                    <span className="font-medium" >$ {product.price}</span>

                </div>
                <div className="order-last mr-1">
                    <FavoriteButton 
                        favorite={ product } 
                        className="shadow-sm"
                    />
                </div>
            </div>
        </div>
    )
}