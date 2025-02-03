'use client'
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { logout } from "@/actions"
import { useUiStore } from "@/store"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5"
import { LuShirt } from "react-icons/lu";
import { Input } from '../ui-shadcn/input';
import { BsSearch, BsTicketPerforated } from 'react-icons/bs';
import { Button } from '../ui-shadcn/button';
import { MdAdminPanelSettings } from "react-icons/md";
import { parFont } from '@/config/fonts';

export const Sidebar = () => {
    const isSideMenuOpen = useUiStore(state => state.isSideMenuOpen);
    const closeMenu = useUiStore(state => state.closeSideMenu);
    const { data: session } = useSession();
    const isAdmin = (session?.user.role === 'admin');
    const isAuthenticaed = !!session?.user;
    return (
        <Transition.Root show={isSideMenuOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-y-auto z-50" onClose={closeMenu}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-800/75 transition-opacity duration-300" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className={`${ parFont.className } flex-1 overflow-y-auto px-4 py-4 sm:px-6`}>
                                            <div className="flex items-start justify-end">
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-600 hover:text-gray-800"
                                                        onClick={ closeMenu }
                                                    >
                                                        <span className="absolute -inset-0.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <IoCloseOutline size={27} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='relative mt-4'>
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                                    <BsSearch className="text-gray-500" size={16} />
                                                </div>
                                                <Input
                                                    className='pl-12 text-base'
                                                    placeholder='Buscar...'
                                                />
                                            </div>
                                            {/* Menú */}
                                            {
                                                isAuthenticaed && (
                                                    <>
                                                        <Link
                                                            href="/profile"
                                                            onClick={closeMenu}
                                                        >
                                                            <Button
                                                                variant="ghost"
                                                                size="lg"
                                                                className="w-full justify-start px-3 mt-4 text-base font-normal"
                                                            >
                                                                <IoPersonCircleOutline size={25} className='mr-3 text-gray-700' />
                                                                Perfil
                                                            </Button>
                                                        </Link>
                                                        <Link
                                                            href="/orders"
                                                            onClick={closeMenu}
                                                        >
                                                            <Button
                                                                variant="ghost"
                                                                size="lg"
                                                                className="w-full justify-start px-3 mt-4 text-base font-normal"
                                                            >
                                                                <BsTicketPerforated className='w-6 h-6 mr-3 text-gray-700' />
                                                                Mis ordenes
                                                            </Button>
                                                        </Link>
                                                    </>
                                                )
                                            }
                                            {
                                                isAuthenticaed && (
                                                    <Button
                                                        onClick={() => logout()}
                                                        variant="ghost"
                                                        size="lg"
                                                        className="w-full justify-start px-3 mt-4 text-base font-normal"
                                                    >
                                                        <IoLogOutOutline size={25} className='mr-3 text-gray-800' />
                                                        Salir
                                                    </Button>
                                                )
                                            }
                                            {
                                                !isAuthenticaed && (

                                                    <Link
                                                        href="/auth/login"
                                                        onClick={closeMenu}
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            size="lg"
                                                            className="w-full justify-start px-3 mt-5 text-base font-normal"
                                                        >
                                                            <IoLogInOutline size={25} className='mr-3 text-gray-800' />
                                                            Ingresar
                                                        </Button>
                                                    </Link>
                                                )
                                            }
                                            {
                                                isAdmin && (
                                                    <>
                                                        {/* Line Separator */}
                                                        <div className="w-full h-px bg-gray-200 my-8" />
                                                        <span className='text-sm text-gray-700'>Panel administrativo</span>
                                                        <Link
                                                            href="/admin/products"
                                                            onClick={closeMenu}
                                                        >
                                                            <Button
                                                                variant="ghost"
                                                                size="lg"
                                                                className="w-full justify-start px-3 mt-4 text-base font-normal"
                                                            >
                                                                <LuShirt className='w-6 h-5 mr-3 text-gray-800' />
                                                                Productos
                                                            </Button>
                                                        </Link>
                                                        <Link
                                                            href="/admin/orders"
                                                            onClick={closeMenu}
                                                        >
                                                            <Button
                                                                variant="ghost"
                                                                size="lg"
                                                                className="w-full justify-start px-3 mt-4 text-base font-normal"
                                                            >
                                                                <BsTicketPerforated className='w-6 h-6 mr-3 text-gray-700' />
                                                                Ordenes
                                                            </Button>
                                                        </Link>
                                                        <Link
                                                            href="/admin/users"
                                                            onClick={closeMenu}
                                                        >
                                                            <Button
                                                                variant="ghost"
                                                                size="lg"
                                                                className="w-full justify-start px-3 mt-4 text-base font-normal"
                                                            >
                                                                <MdAdminPanelSettings size={23} className='mr-3 text-gray-600' />
                                                                Usuarios
                                                            </Button>
                                                        </Link>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}