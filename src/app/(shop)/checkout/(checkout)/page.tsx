import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";
import { PlaceOrder } from "./ui/PlaceOrder";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  return (
    <div className="px-2 sm:px-10">
      <div className="flex justify-center items-center mb-72 px-2">

        <div className="flex flex-col w-ful">
          <Title title="Verificar pedido" />
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4" >
            {/* Carrito */}

            <div className="col-span-12 sm:col-span-7 w-full">
              <ProductsInCart />
            </div>



            {/* Order summary */}
            <div className="col-span-12 sm:col-span-5 w-full">
              <PlaceOrder />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}