'use client';

import { useCartStore } from "@/store";
import { currencyFormatter } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ProductsInCart = () => {

    const [loaded, setLoaded] = useState(false);
    const productsInCart = useCartStore( state => state.cart );
    useEffect(() => {
      setLoaded(true);
    }, [])
    

    if ( !loaded ) {
        // todo: aqui construir un squeleton
        return <p>Loading...</p>
    }
  return (
    <div className="flex flex-col mt-5">
      {/* Items */}
      {
        productsInCart.map(product => (
          <div key={`${product.slug} - ${ product.size }`} className="grid grid-cols-12 gap-2 mb-3 items-start w-full">
            <div className="col-span-3">
              <Image
                src={`/products/${ product.image }`}
                width={180}
                height={180}
                className="rounded-md"
                // className="w-24 h-24 sm:w-30 sm:h-30 md:w-40 md:h-40 rounded-md mr-5"
                alt={product.title}
              />
            </div>
            <div className="col-span-7">
              <p>{product.title}</p>
              <p>Talla: <strong>L</strong></p>
              <p className="text-lg font-semibold">{ (product.quantity === 1) ? '1 Producto' : `${product.quantity} Productos` }</p>
            </div>
            <div className="col-span-2">
              <p className="font-semibold">{ currencyFormatter(product.price * product.quantity )}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}