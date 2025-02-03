'use client'

import { useCartStore } from "@/store";
import { currencyFormatter } from "@/utils";
import { useEffect, useState } from "react"

export const OrderSummary = () => {
    const [loaded, setLoaded] = useState(false);
    const { itemsInCart, subTotal, tax, total } = useCartStore( state => state.getSummaryInformation());

    useEffect(() => {
      setLoaded(true)
    }, [])
    if (!loaded) {
        // Construir un squeleton un un loader
        return <p>Loading...</p>
    }

    return (
        <>
            <div className="grid grid-cols-2">
                <span>No. Productos</span>
                <span className="text-right">{ itemsInCart === 1 ? '1 artículo': `${ itemsInCart } artículos`}</span>
                <span>Subtotal</span>
                <span className="text-right slashed-zero tabular-nums">{ currencyFormatter( subTotal ) }</span>
                <span>Impuestos (15%)</span>
                <span className="text-right slashed-zero tabular-nums">{ currencyFormatter( tax )  }</span>
                <span className="text-lg font-semibold text-slate-900 mt-5">Total:</span>
                <span className="text-lg font-semibold text-slate-900 text-right mt-5 slashed-zero tabular-nums">{ currencyFormatter( total ) }</span>
            </div>
        </>
    )
}