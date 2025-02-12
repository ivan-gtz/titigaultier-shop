'use client';
import { Button, FavoriteButton, QuantitySelector, SizeSelector } from "@/components"
import { parFont } from "@/config/fonts";
import type { CartProduct, Product, Size } from "@/interfaces"
import { useCartStore, useSlideCartStore } from "@/store";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {

  const addProductToCart = useCartStore( state => state.addProductToCart );
  const openSlideOver = useSlideCartStore( state => state.openSlideOver );

  const [selectedSize, setSelectedSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);
    if (!selectedSize) return;
    // console.log({ size, quantity, product });
    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: selectedSize,
      image: product.images[0]
    }
    addProductToCart( cartProduct );
    //Todo aqui implementar el pop-up del carrito de compras
    openSlideOver();
    setPosted(false);
    setQuantity(1);
    setSelectedSize(undefined);
  }


  return (
    <>
      {
        posted && !selectedSize && (
          <span className="text-red-500 text-sm fade-in">
            Por favor, seleccione una talla
          </span>
        )
      }
      {/* Selector de Tallas */}
      <SizeSelector
        selectedSize={selectedSize}
        availableSizes={product.sizes}
        onSizeChange={setSelectedSize}
      />
      {/* Selector de Cantidad */}
      <QuantitySelector
        quantity={quantity}
        onQuantityChanged={setQuantity}
      />
      {/* Button */}
      <div className="flex justify-between items-start">
        <Button
          onClick={addToCart}
          size="lg"
          className={`${ parFont.className } my-5 text-sm font-medium w-96 rounded-xl mr-3`}
        >
          AGREGAR A LA CESTA
        </Button>
        <FavoriteButton 
          favorite={ product } 
          className=" p-[11px] my-4 mt-5 border-gray-200"
          heartClass={ 18 }
        />
      </div>
    </>
  )
}