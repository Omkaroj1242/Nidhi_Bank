/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

export default function Example() {
    return (
        <Disclosure as="nav" className=" bg-white fixed-top">
            {({ open }) => (
                <>
                    <div className="container relative flex  justify-between h-16 mx-1">
                        <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XIcon
                                        className="block h-8 w-8"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <MenuIcon
                                        className="block h-8   w-8"
                                        aria-hidden="true"
                                    />
                                )}
                            </Disclosure.Button>
                        </div>

                        <div className="flex">
                            {/* <h1 className="logo flex h-8"> */}
                            <img
                                src="Images/manmandir1.png"
                                alt=""
                                style={{
                                    height: "70px",
                                    width: "70px",
                                    padding: "2",
                                }}
                                className="p-3"
                            />

                            <NavLink
                                to="/"
                                className="text-white font-myFont font-bold text-xl w-full"
                            >
                                <h2 className="mr-5 pr-5 pt-3" style={{ color: "#ffcc80"}}> Manmandir </h2>
                            </NavLink>

                            {/* </h1> */}
                            {/* </div> */}

                            <nav id="navbar" className="navbar">
                                <ul>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className="nav-link scrollto font-myFont"
                                            href="#about"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/about"
                                            className="nav-link scrollto font-myFont"
                                            href="#about"
                                        >
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/personalbanking"
                                            className="nav-link scrollto font-myFont"
                                            href="#personalBanking"
                                        >
                                            Personal Banking
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/service"
                                            className="nav-link scrollto font-myFont"
                                            href="#services"
                                        >
                                            Services
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/branch"
                                            className="nav-link scrollto font-myFont"
                                            href="#services"
                                        >
                                            Branches
                                        </NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink
                                            to="/plan"
                                            className="nav-link scrollto font-myFont "
                                            href="#portfolio"
                                        >
                                            Plan
                                        </NavLink>
                                    </li> */}
                                    <li>
                                        <NavLink
                                            to="/faq"
                                            className="nav-link scrollto font-myFont"
                                            href="#team"
                                        >
                                            FAQ
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/notice"
                                            className="nav-link scrollto font-myFont"
                                            href="#team"
                                        >
                                            Notice
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/contact"
                                            className="nav-link scrollto font-myFont"
                                            href="#contact"
                                        >
                                            Contact
                                        </NavLink>
                                    </li>

                                    <a
                                        href="tel:02347276438"
                                        className="text-black nav-button btn btn-sm btn-warning ml-5"
                                    >
                                        <i
                                            class="fas fa-phone-alt"
                                            style={{
                                                padding: "0 5px 0 0",
                                            }}
                                        ></i>
                                        02347-276438
                                    </a>
                                </ul>
                            </nav>
                        </div>
                        {/* </header> */}
                    </div>
                    <div className="nav-header">
                        <h6 className="text-dark text-center py-1">
                            <marquee>GSTIN Number: 27AAAAM0585H1ZM</marquee>
                        </h6>
                    </div>
                    {/* </div> */}

                    <Disclosure.Panel className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-500 text-center">
                            <Disclosure.Button>
                                <div className="flex">
                                    <ul className="flex-col">
                                        <li className="my_li font-myFont mb-2">
                                            <NavLink to="/about">
                                                About Us
                                            </NavLink>
                                        </li>
                                        <li className="my_li font-myFont mb-2">
                                            <NavLink to="/service">
                                                Service
                                            </NavLink>
                                        </li>
                                        <li className="my_li font-myFont mb-2">
                                            <NavLink to="/branch">
                                                Branches
                                            </NavLink>
                                        </li>
                                        <li className="my_li font-myFont mb-2">
                                            <NavLink to="/plan">Plan</NavLink>
                                        </li>
                                        <li className="my_li font-myFont mb-2">
                                            <NavLink to="/faq">FAQ</NavLink>
                                        </li>
                                        <li className="mx-3 my_li font-myFont mb-2">
                                            <NavLink to="/notice">
                                                Notice
                                            </NavLink>
                                        </li>
                                        <li className="my_li font-myFont mb-2">
                                            <NavLink to="/contact">
                                                Contact Us
                                            </NavLink>
                                        </li>
                                        <li className="my_li font-myFont mb-2">
                                            <NavLink to="/">
                                                GSTIN Number-28DFEGY6598VGKP
                                            </NavLink>
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
