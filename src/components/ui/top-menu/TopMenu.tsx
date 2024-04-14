'use client'
import { titleFont } from "@/config/fonts"
import { useCartStore, useUiStore } from "@/store";
import clsx from "clsx";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"

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
                        "m-2 p-2 rounded-lg transition-all hover:bg-gray-100 text-sm font-normal",
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
                        "m-2 p-2 rounded-lg transition-all hover:bg-gray-100 text-sm font-normal",
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
                        "m-2 p-2 rounded-lg transition-all hover:bg-gray-100 text-sm font-normal",
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
                    <IoSearchOutline className="w-5 h-5" />
                </Link>
                <Link
                    href={((totalItemsInCart === 0) && loaded) ? "/empty" : "/cart"}
                    className="mx-2">
                    <div className="relative">
                        {
                            (loaded && totalItemsInCart > 0) && (
                                <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
                                    {totalItemsInCart}
                                </span>
                            )
                        }
                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>
                <button
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-sm font-medium"
                    onClick={openSideMenu}
                >
                    Menú
                </button>
            </div>


        </nav>
    )
}