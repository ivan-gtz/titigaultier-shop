'use client';

import { placeOrder } from "@/actions";
import { Button, Divider } from "@/components";
import { useAddressStore, useCartStore } from "@/store";
import { currencyFormatter } from "@/utils";
import clsx from "clsx";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const PlaceOrder = () => {
    const router = useRouter();
    const [loaded, setLoaded] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); 
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);
    const address = useAddressStore(state => state.address );
    const { itemsInCart, subTotal, tax, total } = useCartStore( state => state.getSummaryInformation());
    const cart = useCartStore( state => state.cart );
    const clearCart = useCartStore( state => state.clearCart );

    useEffect(() => {
      setLoaded(true);
    }, []);
    //todo redireccionar si el carrito de compras esta vacio tambien hacer en el lado del servidor
    const onPlaceOrder = async() => {
        setIsPlacingOrder(true);
        // await sleep(2);
        const productsToOrder = cart.map( product => ({
            productId: product.id,
            quantity: product.quantity,
            size: product.size,
        }));
        
        const restAddress = {
            firstName: address.firstName,
            lastName: address.lastName,
            address: address.address,
            address2: address.address2,
            postalCode: address.postalCode,
            city: address.city,
            country: address.country,
            phone: address.phone,
        }
        //! Server Action
        const resp = await placeOrder( productsToOrder, restAddress );
        if ( !resp.ok ) {
            setIsPlacingOrder(false);
            setErrorMessage(resp.message);
            return; 
        }

        //* Todo salio bien!
        clearCart();
        router.replace('/orders/' + resp.order?.id );
    }
    
    if ( !loaded ) {
        return <p>Cargando...</p>
    }

    return (
        <div className="bg-white rounded-xl shadow-lg border-slate-100 border-b rounded-t-xl p-4 pb-6">
            <h2 className="text-slate-900 text-lg font-semibold">Dirección de entraga</h2>
            <div className="mb-10">
                <p>{ address.firstName } { address.lastName }</p>
                <p>{ address.address }</p>
                <p>{ address.address2 }</p>
                <p>{ address.postalCode }</p>
                <p>{ address.city } { address.country }</p>
                <p>{ address.phone }</p>
            </div>
            {/* Divider */}
            <Divider />

            <h2 className="text-slate-900 text-lg font-semibold flex justify-between">
                Resumen del pedido
                <Button
                    size="sm"
                    variant="link"
                    asChild
                    className="px-0 font-semibold text-base"
                >
                    <Link href="/cart">Editar</Link>
                </Button>
            </h2>

            <div className="grid grid-cols-2 slashed-zero tabular-nums">
                <span>No. Productos</span>
                <span className="text-right">{ itemsInCart === 1 ? '1 artículo': `${ itemsInCart } artículos`}</span>
                <span>Subtotal</span>
                <span className="text-right">{ currencyFormatter( subTotal )  }</span>
                <span>Impuestos (15%)</span>
                <span className="text-right">{ currencyFormatter( tax )  }</span>
                <span className="text-lg font-semibold text-slate-900 mt-5">Total:</span>
                <span className="text-lg font-semibold text-slate-900 text-right mt-5">{ currencyFormatter( total ) }</span>

            </div>
            <div className="mt-5 mb-2 w-full">
                <p className="mb-5">
                    {/* Disclaimer */}
                    <span className="text-xs">
                        Al hacer click en &quot;Colocar orden&quot;, aceptas nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">política de privacidad</a>
                    </span>
                </p>

                <p className="text-red-500">{ errorMessage }</p>
                <Button
                    disabled={ isPlacingOrder }
                    onClick={ onPlaceOrder }
                    size="lg"
                    type="submit"
                    className="w-full"
                >
                    {
                        isPlacingOrder ?
                        <>
                            <Loader2 size={ 20 } className="animate-spin mr-2" />
                            Espere por favor 
                        </> :
                        "Confirmar pedido"

                    }
                </Button>
            </div>
        </div>
    )
}