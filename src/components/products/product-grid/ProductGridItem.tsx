'use client'
import { Button } from "@/components/ui/ui-shadcn/button";
import { parFont } from "@/config/fonts";
import { Product } from "@/interfaces"
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
    product: Product;
}


export const ProductGridItem = ({ product }: Props) => {

    const [displayImage, setDisplayImage] = useState(product.images[0]);
    const [isLiked, setIsLiked] = useState(false);
    return (
        <div className="rounded-lg overflow-hidden fade-in">
            <Link href={`/product/${product.slug}`}>
                <Image
                    src={`/products/${displayImage}`}
                    alt={product.title}
                    className="w.full object-cover rounded-lg drop-shadow-sm hover:drop-shadow hover:duration-150"
                    width={500}
                    height={500}
                    onMouseEnter={() => setDisplayImage(product.images[1])}
                    onMouseLeave={() => setDisplayImage(product.images[0])}
                />
            </Link>
            <div className={`${parFont.className} pt-2 flex justify-between text-sm font-normal`}>
                <div className="mr-1">
                    <h3>
                        <Link
                            href={`/product/${product.slug}`}
                        >
                            {product.title}
                        </Link>
                    </h3>
                    <span className="font-medium" >$ {product.price}</span>

                </div>
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/80 rounded-full backdrop-blur-sm transition-colors hover:bg-white flex-shrink-0"
                    onClick={() => setIsLiked(!isLiked)}
                >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                    <span className="sr-only">Add to favorites</span>
                </Button>
            </div>
        </div>
    )
}