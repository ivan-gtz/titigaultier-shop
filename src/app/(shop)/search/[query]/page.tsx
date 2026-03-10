import { getProductByTerm } from "@/actions";
import { Divider, ProductGrid, Title } from "@/components";
import { parFont } from "@/config/fonts";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    query: string
  }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const query = params.query;
  const decodedTerm = decodeURIComponent(query);
  
  return {
    title: `Búsqueda: ${decodedTerm} | TitiGaultier`,
    description: `Resultados de búsqueda para "${decodedTerm}"`,
    openGraph: {
      title: `Búsqueda: ${decodedTerm}`,
      description: `Encuentra los mejores productos relacionados con "${decodedTerm}"`
    }
  }
}

export default async function SearchPage(props: Props) {
  const params = await props.params;
  const query = params.query;
  const decodedTerm = decodeURIComponent(query);
  const products = await getProductByTerm(decodedTerm);

  const titleText = `Búsqueda: ${decodedTerm} | TitiGaultier`;
  const subtitleText = `Resultados de búsqueda para "${decodedTerm}"`;

  if ( products.length === 0 ) {
    return (
      <div className="min-h-[500px] flex flex-col items-center justify-center gap-4 px-4">
        <h1 className={`${parFont.className} text-2xl text-center`}>
          No encontramos resultados para <br/> 
          <span className="font-bold">&quot;{decodedTerm}&quot;</span>
        </h1>
      </div>
    )
  }
  return (
    <div className="px-2 sm:px-10">
        <Title 
          title={titleText}
          subtitle={subtitleText}
          className="mb-2"
        />
        <Divider />
        <ProductGrid products={ products }/>
    </div>
  );
}
