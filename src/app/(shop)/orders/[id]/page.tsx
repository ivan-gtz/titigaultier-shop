import { getOrderById } from "@/actions/order/get-order-by-id";
import { Divider, OrderStatus, PayPalButton, Title } from "@/components";
import Image from "next/image";
import { redirect } from "next/navigation";
import { currencyFormatter } from "@/utils";


interface Props {
  params: Promise<{
    id: string
  }>
}


export default async function ProductBySlugPage(props: Props) {
  const params = await props.params;

  const { id } = params;
  // todo: llamar el server action
  const { ok, order } = await getOrderById(id);

  if (!ok) {
    redirect('/');
  }
  const address = order!.OrderAddress;

  //refactorizar
  const getImageUrl = (imagePath: string) => {
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    return `/products/${imagePath}`;
  };

  return (
    <div className="px-2 sm:px-10">
      <div className="flex justify-center items-center mb-72 px-2">

        <div className="flex flex-col w-ful">
          <Title title={`Pedido: #${id.split('-').at(-1)}`} />
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4" >

            {/* Carrito */}
            <div className="col-span-12 sm:col-span-7 w-full">
              <OrderStatus isPaid={order?.isPaid ?? false} />
              <div className="flex flex-col mt-5">
                {/* Items */}
                {
                  order!.OrderItem.map(item => (
                    <div key={item.product.slug + '-' + item.size} className="grid grid-cols-12 gap-2 mb-3 items-start w-full">
                      <div className="col-span-3">
                        <Image
                          src={getImageUrl(item.product.ProductImage[0].url)}
                          width={150}
                          height={150}
                          className="rounded-md"
                          // className="w-24 h-24 sm:w-30 sm:h-30 md:w-40 md:h-40 rounded-md mr-5"
                          alt={item.product.title}
                        />
                      </div>
                      <div className="col-span-7">
                        <p>{item.product.title}</p>
                        <p>Talla: <strong>L</strong></p>
                        <p className="text-lg font-semibold slashed-zero tabular-nums">{item.quantity === 1 ? ' 1 producto' : `${item.quantity} productos`}</p>
                      </div>
                      <div className="col-span-2 slashed-zero tabular-nums">
                        <p>{currencyFormatter(item.price)}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>



            {/* Order summary */}
            <div className="col-span-12 sm:col-span-5 w-full">
              <div className="bg-white rounded-xl shadow-lg border-slate-100 border-b rounded-t-xl p-4 pb-6">
                <h2 className="text-slate-900 text-lg font-medium">Dirección de entraga</h2>
                <div className="mb-10 text-base font-light">
                  <p>{address!.firstName} {address!.lastName}</p>
                  <p>{address!.address}</p>
                  <p>{address!.address2}</p>
                  <p>{address!.postalCode}</p>
                  <p>{address!.city}, {address!.countryId}</p>
                  <p>{address!.phone}</p>
                </div>
                {/* Divider */}
                <Divider />

                <h2 className="text-slate-900 text-lg flex justify-between font-medium">
                  Resumen del pedido
                </h2>

                <div className="grid grid-cols-2 mb-2 text-base font-light slashed-zero tabular-nums">
                  <span>No. Productos</span>
                  <span className="text-right">{order?.itemsInOrder === 1 ? '1 artículo' : `${order?.itemsInOrder} artículos`}</span>
                  <span>Subtotal</span>
                  <span className="text-right">{currencyFormatter(order!.subTotal)}</span>
                  <span>Impuestos (15%)</span>
                  <span className="text-right">{currencyFormatter(order!.tax)}</span>
                  <span className="text-lg font-medium text-slate-900 mt-5">Total:</span>
                  <span className="text-lg font-medium text-slate-900 text-right mt-5">{currencyFormatter(order!.total)}</span>

                </div>
                {
                  order?.isPaid ? (
                    <OrderStatus isPaid={order?.isPaid ?? false} />
                  ) : (
                    <PayPalButton orderId={order!.id} amount={order!.total} />
                  )
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}