export const revalidate = 60; // 60 segundos

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: string
  }
}

export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt( searchParams.page ) : 1;

  const { products, totalPages, currentPage } = await getPaginatedProductsWithImages({ page });

  // console.log(totalPages);
  if ( products.length === 0 ) {
    redirect('/');
  }


  return (
    <div className="px-2 sm:px-10">
      <Title 
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
        products={ products }
      />
      <Pagination totalPages={totalPages}/>
    </div>
  );
}
