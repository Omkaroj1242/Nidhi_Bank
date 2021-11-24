/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-blue-500 md:px-10">
            {({ open }) => (
                <>
                    <div className="bg-blue-500 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div>
                                <img
                                    className="hidden lg:block h-8 w-auto text-center"
                                    src="/Images/bank.jpeg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>

                            {/* Laptop Navbar */}

                            <div className="flex-1 flex lg:block items-center justify-center px-2">
                                <div className="flex items-center">
                                    <img
                                        className="lg:hidden block px-2 h-8 w-auto text-center"
                                        src="/Images/bank.jpeg"
                                        alt="Workflow"
                                    />
                                    <Link
                                        className=" text-black text-xl font-bold font-myFont"
                                        to="/"
                                    >
                                        Manmandir
                                    </Link>
                                </div>
                                </div>
                                <div className="hidden lg:block sm:ml-6">
                                    <div className="flex mx-4 space-x-4">
                                        <ul className="flex">
                                            <li className="mx-3 my_li">
                                                <Link to="/about">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li className="mx-3 my_li">
                                                <Link to="/service">
                                                    Service
                                                </Link>
                                            </li>
                                            <li className="mx-3 my_li">
                                                <Link to="/plan">Plan</Link>
                                            </li>
                                            <li className="mx-3 my_li">
                                                <Link to="/faq">FAQ</Link>
                                            </li>
                                            <li className="mx-3 my_li">
                                                <Link to="/contact">
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                           
                            <FaPhoneAlt className="hidden lg:block" />
                            <div className="hidden lg:block">
                                <h1 className="my_h1 px-2">
                                    <a href="tel:+918974562241">8974562241</a>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-500 text-center">
                            <Disclosure.Button>
                                <div className="flex">
                                    <ul className="flex-col">
                                        <li className="my_li">
                                            <Link to="/about">About Us</Link>
                                        </li>
                                        <li className="my_li">
                                            <Link to="/service">Service</Link>
                                        </li>
                                        <li className="my_li">
                                            <Link to="/invest">Invest</Link>
                                        </li>
                                        <li className="my_li">
                                            <Link to="/faq">FAQ</Link>
                                        </li>
                                        <li className="my_li">
                                            <Link to="/contact">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
