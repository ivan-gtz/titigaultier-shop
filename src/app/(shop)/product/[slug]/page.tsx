export const revalidate = 604800; // 7 dias

import { getProductBySlug } from "@/actions";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { parFont, titleFont } from "@/config/fonts";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";

interface Props {
  params: {
    slug: string;
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title ?? 'Producto no encontrado',
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? 'Producto no encontrado',
      description: product?.description ?? '',
      images: [`/products/${product?.images[1]}`],
    },
  }
}


export default async function ProductBySlougPage({ params }: Props) {

  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="md:px-10">
      <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-12 md:gap-3">
        {/* Slideshow */}

        <div className="col-span-7 bg-red-300">
          {/* Mobile Slideshow */}
          <ProductMobileSlideshow
            images={product.images}
            title={product.title}
            className="block md:hidden"
          />
          {/* Desktop Slideshow */}
          <ProductSlideshow
            images={product.images}
            title={product.title}
            className="hidden md:block"
          />
        </div>
        <div className="col-span-5 px-5 bg-blue-100 pt-2 md:pt-0">  
          <h1 className={` ${parFont.className} antialiased font-black text-2xl`}>
            {product.title}
          </h1>
          <StockLabel slug={slug} />

          <p className={`${ parFont.className } text-lg mb-5`}>${product.price}</p>
          <AddToCart product={product} />
          {/* Descripción */}
          <h3 className={`${ parFont.className } font-bold text-base`}>Descripción</h3>
          <p className={` ${ parFont.className } font-light text-base`}>
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}