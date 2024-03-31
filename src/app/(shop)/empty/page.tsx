import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
  return (
    <div className="px-2 sm:px-10">
      <div className="flex justify-center items-center h-[700px]">
        <IoCartOutline size={ 90 } className="mx-2"/>

        <div className="flex flex-col items-center">
          <h1 className="antialiased text-lg md:text-xl leading-normal mb-2 font-semibold">
            Tu carrito está vacío
          </h1>
          <Link 
            href="/"
            className="text-blue-500 mt-1 text-3xl"
          >
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
}