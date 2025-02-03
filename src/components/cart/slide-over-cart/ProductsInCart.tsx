'use client'

import { ProductImage } from "@/components";
import { Button } from "@/components/ui/ui-shadcn/button";
import { parFont } from "@/config/fonts";
import { useCartStore } from "@/store";
import { currencyFormatter } from "@/utils";
import Link from "next/link";
import { LiaTrashAlt } from "react-icons/lia";

export const ProductsInCart = () => {
    const productsInCart = useCartStore(state => state.cart);
    const removeProduct = useCartStore( state => state.removeProduct );
    return (
        <>
            {
                productsInCart.map(product => (
                    <li key={`${product.slug}- ${product.size}`} className={`${parFont.className} flex py-6`}>
                        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <ProductImage
                                src={product.image}
                                alt={product.title}
                                width={100}
                                height={100}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                            <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                        <Link href={`/product/${ product.slug }`}>{ product.title }</Link>
                                    </h3>
                                    <p className="ml-4">{currencyFormatter(product.price)}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty {product.quantity}</p>

                                <div className="flex">
                                    <Button
                                        // type="button"
                                        variant="link"
                                        size="icon"
                                        onClick={ () => removeProduct( product ) }
                                        className="relative -m-2 p-2 text-gray-600 hover:text-gray-800 h-10 w-10"
                                    >
                                        {/* Remove */}
                                        < LiaTrashAlt size={25} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))
            }
        </>
    )
}