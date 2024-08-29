'use client'

import { parFont } from "@/config/fonts";
import { generatePaginationNumbers } from "@/utils";
import Link from "next/link"
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react"
interface Props {
    totalPages: number;
}


export const Pagination = ({ totalPages }: Props) => {

    const pathName =usePathname();
    const searchParams = useSearchParams();
    const pageString = searchParams.get('page') ?? 1;

    const currentPage = isNaN(Number(pageString)) ? 1 : Number(pageString); 
    if (currentPage < 1 || isNaN(+pageString) ) {
        redirect( pathName );
    }
    // const currentPage = Number( searchParams.get('page') ? searchParams.get('page') : 1
    // ) ?? 1;

    // const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10",])
    // const [pages, setPages] = useState([1,2,3,4,5,6,7])
    // const [currentPage, setCurrentPage] = useState(1)

    const allPages = generatePaginationNumbers( currentPage, totalPages );
    console.log(allPages);

    const createPageUrl = ( pageNumber: number | string ) => {

        const params = new URLSearchParams( searchParams as any );
        if ( pageNumber === '...') {
            return `${ pathName }?${ params.toString() }`;
        }

        if ( Number(pageNumber) <= 0 ) {
            return `${ pathName }`;
        }

        if ( Number(pageNumber) > totalPages ) {
            return `${ pathName }?${ params.toString() }`;
        }
        params.set('page', pageNumber.toString());
        return `${ pathName }?${ params.toString() }`;
    }


    return (
        <div className={`${parFont.className} max-w-screen-xl mx-auto mt-12 px-4 text-gray-700 md:px-8 mb-32`}>
            <div className="hidden items-center justify-between sm:flex" aria-label="Pagination">
                <Link href={ createPageUrl( currentPage - 1 ) } className="hover:text-gray-900 flex items-center gap-x-2 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
                    </svg>
                    Anterior
                </Link>
                <ul className="flex items-center gap-1">
                    {
                        allPages.map(( page, idx ) => (
                            <li key={ page + '-' + idx } className="text-base">
                                {
                                    page == "..." ? (
                                        <div>
                                            {page}
                                        </div>
                                    ) : (

                                        <Link href={ createPageUrl( page )} aria-current={currentPage == page ? "page" : false} className={`px-3 py-2 rounded-lg duration-150 hover:bg-gray-100 ${currentPage == page ? "bg-black text-white hover:bg-gray-950" : ""}`}>
                                            {page}
                                        </Link>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
                <Link href={ createPageUrl( currentPage + 1 ) } className="hover:text-gray-900 flex items-center gap-x-2 text-base">
                    Siguiente
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
            {/* On mobile version */}
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
                <Link href={ createPageUrl( currentPage + 1 ) } className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Anterior</Link>
                <div className="font-medium">
                    Página {currentPage} de {totalPages}
                </div>
                <Link href={ createPageUrl( currentPage + 1 ) } className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Siguiente</Link>
            </div>
        </div>
    )
}