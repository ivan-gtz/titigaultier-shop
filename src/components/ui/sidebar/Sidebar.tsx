'use client'
import { logout } from "@/actions"
import { useUiStore } from "@/store"
import clsx from "clsx"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"

export const Sidebar = () => {

  const isSideMenuOpen = useUiStore(state => state.isSideMenuOpen);
  const closeMenu = useUiStore(state => state.closeSideMenu);
  const { data: session } = useSession();
  const isAdmin = (session?.user.role === 'admin');


  const isAuthenticaed = !!session?.user;

  return (
    <div>
      {/* Backgroun black */}
      {
        isSideMenuOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          />
        )
      }
      {/* Blur */}
      {
        isSideMenuOpen && (
          <div
            onClick={closeMenu}
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          />
        )
      }
      {/* Sidemenu */}
      <nav className={
        clsx(
          "fixed p-5 right-0 top-0 w-[350px] h-screen bg-white z-20 shadow-2xl transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen
          }
        )
      }>
        <IoCloseOutline
          size={40}
          className="absolute top-2 right-2 cursor-pointer"
          onClick={closeMenu}
        />
        {/* Input */}
        <div className="relative mt-8">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-base border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Menú */}
        {
          isAuthenticaed && (
            <>
              <Link
                href="/profile"
                onClick={closeMenu}
                className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
              >
                <IoPersonOutline size={20} />
                <span className="ml-3 text-base">Perfil</span>
              </Link>
              <Link
                href="/orders"
                onClick={closeMenu}
                className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
              >
                <IoTicketOutline size={20} />
                <span className="ml-3 text-base">Ordenes</span>
              </Link>
            </>

          )
        }

        {
          isAuthenticaed && (
            <button
              className="flex w-full items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={() => logout()}
            >
              <IoLogOutOutline size={20} />
              <span className="ml-3 text-base">Salir</span>
            </button>
          )
        }
        {
          !isAuthenticaed && (

            <Link
              href="/auth/login"
              className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={closeMenu}
            >
              <IoLogInOutline size={20} />
              <span className="ml-3 text-base">Ingresar</span>
            </Link>
          )
        }

        {
          isAdmin && (
            <>
              {/* Line Separator */}
              <div className="w-full h-px bg-gray-200 my-8" />
              <Link
                href="/"
                className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
              >
                <IoShirtOutline size={20} />
                <span className="ml-3 text-base">Productos</span>
              </Link>
              <Link
                href="/"
                className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
              >
                <IoTicketOutline size={20} />
                <span className="ml-3 text-base">Ordenes</span>
              </Link>
              <Link
                href="/"
                className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
              >
                <IoPeopleOutline size={20} />
                <span className="ml-3 text-base">Usuarios</span>
              </Link>
            </>
          )
        }



      </nav>
    </div>
  )
}