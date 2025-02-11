'use client'
import { Product } from "@/interfaces";
import Image from "next/image";
import { parFont } from "@/config/fonts";
import { FavoriteButton } from "@/components/product/farorite-button/FavoriteButton";
import Link from "next/link";

interface Props {
    product: Product;
}

export const  ProductGridItemFav = ({ product }: Props) => {

  return (
    <div className="group relative max-w-sm overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl fade-in">
      <div className="relative aspect-square">
      <Link href={`/product/${product.slug}`}>
          <Image
            src={`/products/${product.images[0]}`}
            alt={product.title}
            width={500}
            height={500}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-102"
          />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
        </Link>
        <FavoriteButton favorite={product} className="absolute top-2 right-2"/>
      </div>
      <Link href={`/product/${product.slug}`}>
        <div className="p-2 flex justify-between">
          <h3 className={`${parFont.className} text-base font-normal text-gray-800 mb-1 mr-1`}>{ product.title }</h3>
          <span className={`${parFont.className} font-medium`} >${ product.price }</span>
        </div>
      </Link>
    </div>
  )
}