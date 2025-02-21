import { buttonVariants, Divider, Title } from "@/components";
import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from "./ui/OrderSummary";
import { parFont } from "@/config/fonts";



export default function CartPage() {


  // redirect('/empty');

  return (
    <div className="px-2 sm:px-10">
      <div className="flex justify-center items-center mb-72 px-2">

        <div className="flex flex-col w-ful">
          <Title title="Carrito" />
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4" >
            {/* Carrito */}
            <div className={`${ parFont.className } col-span-12 sm:col-span-7 w-full`}>
              <div className="flex flex-col mt-5">
                <span className="text-base">Agregar más items</span>
                <Link href="/" className="underline mb-5 text-sm">
                  Continúa comprando
                </Link>
                {/* Items */}
                <ProductsInCart />
              </div>
            </div>

            {/* Order summary */}
            <div className={`${parFont.className} col-span-12 sm:col-span-5 w-full`}>
              <div className="bg-white rounded-xl shadow-lg border-slate-100 border-b rounded-t-xl p-4 pb-6">
                <h2 className="text-slate-900 text-xl">Resumen del pedido</h2>
                <Divider />
                <OrderSummary />
                  <Link
                    href="/checkout/address"
                    className={buttonVariants({
                      size: "lg",
                      className: "w-full mt-5 mb-2 text-base"
                    })}
                  >
                    Checkout
                  </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}