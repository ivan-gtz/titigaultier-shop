import { parFont, titleFont } from "@/config/fonts"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export const Footer = () => {
    return (
        <footer className="bg-slate-50">
            <div className="mx-auto max-w-(--breakpoint-xl) space-y-8 px-4 py-12 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className={`${parFont.className } text-sm font-medium`}>AYUDA & APOYO</p>

                            <ul className={`${parFont.className} mt-6 space-y-3 text-sm`}>
                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Compra Online </Link>
                                </li>

                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Devoluciones </Link>
                                </li>

                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Información de envio </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className={`${parFont.className } text-sm font-medium`}>SOBRE NOSOTROS</p>

                            <ul className={`${parFont.className} mt-6 space-y-3 text-sm`}>
                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> ¿Quiénes Somos? </Link>
                                </li>

                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Nuestras Tiendas </Link>
                                </li>

                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Responsabilidad Social </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Marca y Logo </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className={`${parFont.className } text-sm font-medium`}>SERVICIO AL CLIENTE</p>

                            <ul className={`${parFont.className} mt-6 space-y-3 text-sm`}>
                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Contáctanos </Link>
                                </li>

                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Pagos & Impuestos </Link>
                                </li>

                                <li>
                                    <Link href="#" className="flex items-center gap-1 text-black transition hover:opacity-75"> 
                                        WhatsApp <FaWhatsapp size={18}/> 
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className={`${parFont.className } text-sm font-medium`}>TE PUEDE INTERESAR</p>

                            <ul className={`${parFont.className} mt-6 space-y-3 text-sm`}>
                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Vestidos mujer </Link>
                                </li>

                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Camisas y blusas mujer </Link>
                                </li>

                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Camisetas mujer </Link>
                                </li>

                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Pantalones hombre </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-black transition hover:opacity-75"> Camisetas hombre </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className={`${parFont.className } text-sm font-medium`}>ENCUÉNTRANOS EN</p>
                        <ul className="mt-8 flex gap-6">
                            <li>
                                <Link 
                                    href="https://www.facebook.com/people/Titi-Gaultier/100088318328222/?mibextid=ZbWKwL"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-950 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Facebook</span>

                                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="https://www.instagram.com/titi.gaultier/?igshid=ZDdkNTZiNTM%3D"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-950 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-950 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Twitter</span>

                                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.tiktok.com/@titi.gaultier"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">TikTok</span>

                                    <svg className="h-7 w-6" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"
                                        />
                                    </svg>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">GitHub</span>

                                    <svg 
                                        fill="#000000" 
                                        className="w-7 h-7"
                                        viewBox="-2 -5 24 24" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        preserveAspectRatio="xMinYMin" 
                                    >
                                        <path d='M15.812.017H4.145C1.855.017 0 1.852 0 4.116v5.768c0 2.264 1.856 4.1 4.145 4.1h11.667c2.29 0 4.145-1.836 4.145-4.1V4.116c0-2.264-1.856-4.1-4.145-4.1zM13.009 7.28L7.552 9.855a.219.219 0 0 1-.314-.196V4.35c0-.161.173-.266.318-.193l5.458 2.735a.216.216 0 0 1-.005.389z' />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Pinterest</span>

                                    <svg className="w-6 h-7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#000000" d="M10.0146193,0 C4.48352199,0 0,4.4725 0,9.98916667 C0,14.2216667 2.63815212,17.8366667 6.36397811,19.2908333 C6.27626248,18.5 6.1977361,17.2883333 6.39822898,16.425 C6.58117873,15.6441667 7.57278309,11.4608333 7.57278309,11.4608333 C7.57278309,11.4608333 7.27287916,10.8608333 7.27287916,9.97666667 C7.27287916,8.59083333 8.08069838,7.55083333 9.08399816,7.55083333 C9.93943444,7.55083333 10.3521156,8.19166667 10.3521156,8.9575 C10.3521156,9.815 9.80660791,11.0966667 9.52341172,12.2841667 C9.28532643,13.2783333 10.0246439,14.0883333 11.0062236,14.0883333 C12.7839272,14.0883333 14.1539618,12.2175 14.1539618,9.51583333 C14.1539618,7.13166667 12.4305585,5.45833333 9.97034376,5.45833333 C7.12167412,5.45833333 5.45173552,7.59333333 5.45173552,9.79083333 C5.45173552,10.6516667 5.78087799,11.5766667 6.19439455,12.075 C6.27709787,12.175 6.2879579,12.2625 6.26540245,12.3625 C6.19021762,12.675 6.02063406,13.3616667 5.98638319,13.4983333 C5.94210768,13.6858333 5.84269663,13.7241667 5.65139301,13.6358333 C4.40248945,13.0608333 3.61889645,11.2375 3.61889645,9.76416667 C3.61889645,6.6175 5.91453991,3.72083333 10.2351614,3.72083333 C13.7087006,3.72083333 16.4103421,6.19333333 16.4103421,9.49 C16.4103421,12.9358333 14.2324882,15.7083333 11.203375,15.7083333 C10.1892152,15.7083333 9.23687398,15.1841667 8.89937764,14.5591667 L8.27367278,16.9325 C8.04895368,17.8033333 7.43494424,18.8925 7.02226306,19.5541667 C7.96040266,19.8416667 8.94866547,20 9.98788689,20 C15.5072888,20 20,15.5291667 20,10.0108333 C20,4.49166667 15.5072888,0.0216666667 9.98788689,0.0216666667 L10.0146193,0 Z"/>
                                    </svg>
                                </Link>
                            </li>                            
                        </ul>
                    </div>
                </div>

                <p className="text-xs text-gray-500">
                    &copy; { new Date().getFullYear() }. 
                    <span className={`${ titleFont.className } antialiased font-semibold`}> TitiGaultier </span>
                    Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}