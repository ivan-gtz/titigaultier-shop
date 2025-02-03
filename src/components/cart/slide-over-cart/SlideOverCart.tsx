"use client"
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoCloseOutline } from 'react-icons/io5';
import { ProductsInCart } from './ProductsInCart'
import { useCartStore, useSlideCartStore } from '@/store';
import { currencyFormatter } from '@/utils';
import { Button } from '@/components/ui/ui-shadcn/button';
import Link from 'next/link';
import { parFont, titleFont } from '@/config/fonts';

export const SlideOverCart = () => {
    const { itemsInCart, subTotal } = useCartStore( state => state.getSummaryInformation());
    
    const isSlideOverOpen = useSlideCartStore( state => state.isSlideOverOpen );
    const closeSlideOver = useSlideCartStore( state => state.closeSlideOver );
    return (
        <Transition.Root show={ isSlideOverOpen } as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-y-auto z-50" onClose={ closeSlideOver }>
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
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className={`${ titleFont.className } text-2xl font-semibold text-gray-900`}>Cesta ({ itemsInCart })</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={ closeSlideOver }
                                                    >
                                                        <span className="absolute -inset-0.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <IoCloseOutline className="h-7 w-7" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        <ProductsInCart />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`${parFont.className} border-t border-gray-200 px-4 py-6 sm:px-6`}>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h1 className='flex items-center'>Subtotal&nbsp;<p className='text-sm text-gray-500'>(antes de impuestos)</p></h1>
                                                <p>{ currencyFormatter(subTotal) }</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-400">Recuerda que los costos de importación corresponde a los derechos, 
                                                                                          arenceles e impuestos establecidos por cada gobierno local.</p>
                                            <div className="mt-6">
                                                <Button
                                                    asChild
                                                    onClick={ closeSlideOver }
                                                    size="lg"
                                                    className="w-full text-base font-medium h-12"
                                                >
                                                    <Link href="/cart">
                                                        Ver cesta
                                                    </Link>
                                                </Button>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    ó{' '}
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={ closeSlideOver }
                                                    >
                                                        Continúa comprando
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
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