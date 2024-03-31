import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"

export const PageNotFound = () => {
    return (
        <div style={{ height: 'calc(100vh - 56px)'}} className="w-full bg-gray-50 flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-center px-4 text-gray-700">
                <div className="w-full lg:w-1/2 mx-8">
                    <div className={`${ titleFont.className } text-7xl text-cyan-500 font-dark font-extrabold mb-8`}>404</div>
                    <p className={`antialiased text-2xl md:text-3xl leading-normal mb-8`}>
                        Lo sentimos, no pudimos encontrar la página que estás buscando.
                    </p>

                    <Link 
                        href="/" 
                        className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-cyan-600 active:bg-cyan-600 hover:bg-cyan-700"
                    >
                        Regresar al inicio
                    </Link>
                </div>
                <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                    <Image 
                        src="/imgs/not-found.svg" 
                        className="" 
                        width={700}
                        height={700}
                        alt="Page not found" />
                        
                </div>

            </div>
        </div>
    )
}