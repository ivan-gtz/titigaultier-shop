import { Divider, ProductGridFav, Title } from "@/components";


export default async function WhisPage() {

  return (
    <div className="px-2 sm:px-10">
      <Title 
        title="Favoritos"
        subtitle="Encuentra rápido lo que te encanta"
        className="mb-2"
      />
      <Divider />
      <ProductGridFav />
    </div>
  );
}