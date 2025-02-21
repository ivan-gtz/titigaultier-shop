'use client'
import { titleFont, parFont } from "@/config/fonts"
import { useCartStore, useFavoriteStore, useUiStore } from "@/store";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { LiaBarsSolid, LiaHeart, LiaShoppingBagSolid } from "react-icons/lia";
import { Input } from "../ui-shadcn/input";
import { Button } from "../ui-shadcn/button";

export const TopMenu = () => {

    //refactorizar
    const { status } = useSession();
    const [loaded, setLoaded] = useState(false);
    const [searchTerm, setsearchTerm] = useState("");
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const favoritesDB = useFavoriteStore(state => state.favorites);
    const tempFavorites = useFavoriteStore(state => state.tempFavorites);
    const favorites = status === 'authenticated' ? favoritesDB : tempFavorites;

    const pathname = usePathname();
    const openSideMenu = useUiStore(state => state.openSideMenu);
    const totalItemsInCart = useCartStore(state => state.getTotalItems());
    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;
        const trimmedQuery = searchTerm.trim()
        router.push(`/search/${encodeURIComponent(trimmedQuery)}`);
        inputRef.current?.blur();
    }
    useEffect(() => {
        setLoaded(true);
    }, [])
    

    return (
        <nav className="bg-white flex md:px-5 px-1 justify-between items-center w-full border-b border-gray-200 md:border-b-0">
            {/* Logo */}
            <div className="flex flex-row items-center m-2">
                <Button
                    onClick={openSideMenu}
                    variant="ghost"
                    size="icon"
                >
                    <LiaBarsSolid size={26}/>
                </Button>
                <div className="hidden md:block ml-2">
                    <Link
                        href="/"
                    >
                        <span className={`${titleFont.className} antialiased font-bold text-lg`}>TitiGaultier</span>
                        <span> | Shop </span>
                    </Link>
                </div>
            </div>
            

            {/* Center Menu */}
            <div className="hidden sm:block">
                <Link
                    href="/gender/men"
                    className={clsx(
                        `${parFont.className} m-1 p-1.5 px-3 rounded-lg transition-all hover:bg-gray-100 text-sm font-medium`,
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
                        `${parFont.className} m-1 p-1.5 px-3 rounded-lg transition-all hover:bg-gray-100 text-sm font-medium`,
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
                        `${parFont.className} m-1 p-1.5 px-3 rounded-lg transition-all hover:bg-gray-100 text-sm font-medium`,
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
                <div className='relative mr-4'>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 cursor-pointer"
                         onClick={ onSearchTerm }
                    >
                        <BsSearch className="text-gray-600" size={16} />
                    </div>
                    <Input
                        ref={inputRef} 
                        value={ searchTerm }
                        onChange={(e) => setsearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              onSearchTerm();
                              inputRef.current?.blur();
                            }
                          }}
                        type="text"
                        placeholder='Buscar'
                        className={`${parFont.className} pl-10 text-base rounded-xl bg-stone-100`}
                    />
                </div>
                <Link
                    href={((totalItemsInCart === 0) && loaded) ? "/empty" : "/cart"}
                    className="mx-2">
                    <div className="relative">
                        {
                            (loaded && totalItemsInCart > 0) && (
                                <span className={`${parFont.className} absolute text-xs rounded-full w-4 h-4 flex items-center justify-center mt-1 font-medium -top-2 -right-2 bg-black text-white`}>
                                    {totalItemsInCart}
                                </span>
                            )
                        }
                        <LiaShoppingBagSolid size={25} />
                    </div>
                </Link>
                <Link
                    href={"/whislist"}
                    className="mx-2">
                    <div className="relative">
                        {
                            (favorites.length > 0) && (
                                <span className={`${parFont.className} absolute text-xs rounded-full w-4 h-4 flex items-center justify-center mt-1 font-medium -top-2 -right-2 bg-black text-white`}>
                                    {favorites.length}
                                </span>
                            )
                        }
                        <LiaHeart size={25} />
                    </div>
                </Link>
            </div>
        </nav>
    )
}