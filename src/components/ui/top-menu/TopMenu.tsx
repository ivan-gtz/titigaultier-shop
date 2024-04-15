'use client'
import { parFont, titleFont } from "@/config/fonts"
import { useCartStore, useUiStore } from "@/store";
import clsx from "clsx";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5"
import { LiaShoppingBagSolid } from "react-icons/lia";

export const TopMenu = () => {

    const pathname = usePathname();
    console.log(pathname)
    const openSideMenu = useUiStore(state => state.openSideMenu);
    const totalItemsInCart = useCartStore(state => state.getTotalItems());

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])


    return (
        <nav className="fixed top-0 z-40 bg-white flex px-5 justify-between items-center w-full">
            {/* Logo */}
            <div>
                <Link
                    href="/"
                >
                    <span className={`${titleFont.className} antialiased font-bold`}>TitiGaultier</span>
                    <span> | Shop </span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:block">
                <Link
                    href="/gender/men"
                    className={clsx(
                        `${ parFont.className } m-2 p-2 rounded-lg transition-all hover:bg-gray-100 text-sm font-normal`,
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
                        `${ parFont.className } m-2 p-2 rounded-lg transition-all hover:bg-gray-100 text-sm font-normal`,
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
                        `${ parFont.className } m-2 p-2 rounded-lg transition-all hover:bg-gray-100 text-sm font-normal`,
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
                    <IoSearchOutline className="w-5 h-5 mt-1" />
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
                        <LiaShoppingBagSolid className="w-6 h-6" />
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