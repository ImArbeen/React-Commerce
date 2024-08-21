import React, { useState } from "react";

const HomePages: React.FC = () => {
    const [isCartVisible, setCartVisible] = useState(false);
    const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);

    const toggleCartView = () => {
        setCartVisible(prev => !prev);
    };

    const toggleAccountDropdown = () => {
        setAccountDropdownVisible(prev => !prev);
    };

    return (
        <>
            <nav className="bg-teal-800 text-white dark:bg-gray-800 antialiased relative">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                            <div className="shrink-0">
                                <a href="#" title="" className="">
                                    <img className="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="" />
                                    <img className="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="" />
                                </a>
                            </div>

                            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                                <li>
                                    <a href="/" title="" className="flex text-sm font-medium text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Home
                                    </a>
                                </li>
                                <li className="shrink-0">
                                    <a href="/best-seller" title="" className="flex text-sm font-medium text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Best Sellers
                                    </a>
                                </li>
                                <li className="shrink-0">
                                    <a href="/categories" title="" className="flex text-sm font-medium text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Categories
                                    </a>
                                </li>
                                <li className="shrink-0">
                                    <a href="/brands" title="" className="text-sm font-medium text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Brands
                                    </a>
                                </li>
                                <li className="shrink-0">
                                    <a href="/all-products" title="" className="text-sm font-medium text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                                        Buy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center lg:space-x-2 relative">
                            <button onClick={toggleCartView} type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-teal-700 dark:hover:bg-gray-700 text-sm font-medium leading-none text-white dark:text-white">
                                <span className="sr-only">Cart</span>
                                <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                </svg>
                                <span className="hidden sm:flex">My Cart</span>
                                <svg className="hidden sm:flex w-4 h-4 text-white dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`absolute right-0 top-full mt-2 z-10 w-80 max-w-sm space-y-4 overflow-hidden rounded-lg bg-teal-800 p-4 antialiased shadow-lg dark:bg-gray-800 ${isCartVisible ? 'block' : 'hidden'}`}>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <a href="#" className="truncate text-sm font-semibold leading-none text-white dark:text-white hover:underline">Apple iPhone 15</a>
                                        <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$599</p>
                                    </div>

                                    <div className="flex items-center justify-end gap-6">
                                        <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>

                                        <button data-tooltip-target="tooltipRemoveItem1a" type="button" className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                                            <span className="sr-only"> Remove </span>
                                            <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <div id="tooltipRemoveItem1a" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                                            Remove item
                                            <div className="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Additional cart items here... */}
                                <a href="#" title="" className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button"> Proceed to Checkout </a>
                            </div>

                            <button onClick={toggleAccountDropdown} type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-teal-700 dark:hover:bg-gray-700 text-sm font-medium leading-none text-white dark:text-white">
                                <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 18a6 6 0 0 1 12 0H6Z" />
                                </svg>
                                <span className="hidden sm:flex">Account</span>
                                <svg className="hidden sm:flex w-4 h-4 text-white dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`absolute right-0 top-full mt-2 z-10 w-48 bg-teal-800 text-white dark:bg-gray-800 rounded-lg shadow-lg ${isAccountDropdownVisible ? 'block' : 'hidden'}`}>
                                <ul className="py-2 text-sm">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-teal-700 dark:hover:bg-gray-700">Profile</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-teal-700 dark:hover:bg-gray-700">Orders</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-teal-700 dark:hover:bg-gray-700">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-teal-700 dark:hover:bg-gray-700">Sign Out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HomePages;
