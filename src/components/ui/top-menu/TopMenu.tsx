'use client'
import { titleFont, parFont } from "@/config/fonts"
import { useCartStore, useUiStore } from "@/store";
import clsx from "clsx";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";

export const TopMenu = () => {

    const [loaded, setLoaded] = useState(false);
    const pathname = usePathname();
    console.log(pathname)
    const openSideMenu = useUiStore(state => state.openSideMenu);
    const totalItemsInCart = useCartStore(state => state.getTotalItems());

    useEffect(() => {
        setLoaded(true);
    }, [])

    

    return (
        <nav className="bg-white flex px-5 justify-between items-center w-full">
            {/* Logo */}
            <div>
                <Link
                    href="/"
                >
                    <span className={`${titleFont.className} antialiased font-bold text-lg`}>TitiGaultier</span>
                    <span> | Shop </span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:block">
                <Link
                    href="/gender/men"
                    className={clsx(
                        `${ parFont.className } m-1 p-1.5 px-3 rounded-lg transition-all hover:bg-gray-100 text-sm font-medium`,
                        {
                            'bg-black text-white hover:bg-gray-950 transition-all': pathname === '/gender/men'
                        }
                    )}
                >
                    Hombres
                </Link>
                <Link
                    href="/gender/women"
                    className={clsx(
                        `${ parFont.className } m-1 p-1.5 px-3 rounded-lg transition-all hover:bg-gray-100 text-sm font-medium`,
                        {
                            'bg-black text-white hover:bg-gray-950 transition-all': pathname === '/gender/women'
                        }
                    )}
                >
                    Mujeres
                </Link>
                <Link
                    href="/gender/kid"
                    className={clsx(
                        `${ parFont.className } m-1 p-1.5 px-3 rounded-lg transition-all hover:bg-gray-100 text-sm font-medium`,
                        {
                            'bg-black text-white hover:bg-gray-950 transition-all': pathname === '/gender/kid'
                        }
                    )}
                >
                    Niños
                </Link>
            </div>
            {/* Search, Cart, Menú (BsSearch opcional icon)*/}
            <div className="flex items-center">
                <Link href="/search" className="mx-2">
                    <BsSearch className="mt-1" size={18}/>
                </Link>
                <Link
                    href={((totalItemsInCart === 0) && loaded) ? "/empty" : "/cart"}
                    className="mx-2">
                    <div className="relative">
                        {
                            (loaded && totalItemsInCart > 0) && (
                                <span className={`${ parFont.className } absolute text-xs rounded-full w-4 h-4 flex items-center justify-center mt-1 font-medium -top-2 -right-2 bg-blue-700 text-white`}>
                                    {totalItemsInCart}
                                </span>
                            )
                        }
                        <LiaShoppingBagSolid size={25} />
                    </div>
                </Link>
                <button
                    className={`${ parFont.className } m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-sm font-medium`}
                    onClick={openSideMenu}
                >
                    Menú
                </button>
            </div>
        </nav>
    )
}