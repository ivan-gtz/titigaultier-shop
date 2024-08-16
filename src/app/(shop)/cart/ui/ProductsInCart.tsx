'use client'

import { ProductImage, QuantitySelector } from "@/components";
import { useCartStore } from "@/store"
import Link from "next/link";
import { useEffect, useState } from "react";


export const ProductsInCart = () => {

    const updateProductQuantity = useCartStore( state => state.updateProductQuantity );
    const removeProduct = useCartStore( state => state.removeProduct );
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
        <>
            {
                productsInCart.map(product => (
                    <div key={`${ product.slug }- ${ product.size }`} className="grid grid-cols-12 gap-1 mb-3 items-start w-full">
                        <div className="col-span-3">
                            <ProductImage
                                src={ product.image }
                                width={180}
                                height={180}
                                className="rounded-md"
                                // className="w-24 h-24 sm:w-30 sm:h-30 md:w-40 md:h-40 rounded-md mr-5"
                                alt={product.title}
                            />
                        </div>
                        <div className="col-span-7">
                            <Link href={`/product/${ product.slug }`}>
                                <p>{product.title}</p>
                            </Link>
                            <p>Talla: <strong className="font-semibold">{ product.size }</strong></p>
                            <QuantitySelector
                                onQuantityChanged={quantity => updateProductQuantity(product, quantity)} 
                                quantity={ product.quantity } 
                                size={25} 
                            />

                        </div>
                        <div className="col-span-2">
                            <p>${product.price}</p>
                            <button 
                                onClick={ () => removeProduct( product ) }
                                className="text-sm text-blue-800 font-medium"
                            >
                                Remover
                            </button>
                        </div>
                    </div>
                ))
            }

        </>
    )
}