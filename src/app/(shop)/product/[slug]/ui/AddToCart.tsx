'use client';
import { QuantitySelector, SizeSelector } from "@/components"
import { Button } from "@/components/ui/ui-shadcn/button";
import { parFont } from "@/config/fonts";
import type { CartProduct, Product, Size } from "@/interfaces"
import { useCartStore } from "@/store";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {

  const addProductToCart = useCartStore( state => state.addProductToCart );

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
    //Todo aqui implementar el pop-up del carrito de comppras
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
      <Button
        onClick={addToCart}
        size="lg"
        className={`${ parFont.className } my-5 text-sm font-medium`}
      >
        AGREGAR AL CARRITO
      </Button>
    </>
  )
}