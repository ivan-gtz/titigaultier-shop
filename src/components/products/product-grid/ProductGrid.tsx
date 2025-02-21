import { Product } from "@/interfaces"
import { ProductGridItem } from "./ProductGridItem";

interface Props {
    products: Product[];
}


export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid gap-2 md:gap-7 grid-cols-2 sm:grid-cols-3 mb-10">
        {
            products.map( product => (
                <ProductGridItem 
                    key={ product.slug } 
                    product={ product }
                />
            ))
        }
    </div>
  )
}