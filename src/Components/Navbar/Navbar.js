/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
// import About from "../About/About";

export default function Example() {
    return (
        <Disclosure as="nav" className="header bg-white fixed-top">
            {({ open }) => (
                <>
                    <div className="relative flex  justify-between h-25 mx-2">
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

                        <div className="flex navbr pt-2">
                            {/* <h1 className="logo flex h-8"> */}
                            <img
                                src="Images/logo1.png"
                                alt=""
                                style={{
                                    height: "65px",
                                    // width: "100",
                                }}
                                className=""
                            />
                            <img
                                src="Images/logo11.png"
                                alt=""
                                style={{
                                    height: "70px",
                                    // width: "100",
                                }}
                                className=""
                            />

                            {/* <NavLink to="/" className="font-bold">
                                <h1 className="mr-5 pr-3 pt-2 text-dark">
                                    {" "}
                                    Shrisatya{" "}
                                </h1>
                            </NavLink> */}
                        </div>

                        <div className="flex pr-5">
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
                                        {/* <NavDropdown className="nav-link scrollto font-myFont" title="About Us" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#/about">About Us</NavDropdown.Item>
                                            <NavDropdown.Item to="">
                                                Our Vision and Mission
                                            </NavDropdown.Item>
                                        </NavDropdown> */}
                                    </li>
                                    {/* <li>
                                        <NavLink
                                            to="/personalbanking"
                                            className="nav-link scrollto font-myFont"
                                            href="#personalBanking"
                                        >
                                            Personal Banking
                                        </NavLink>
                                    </li> */}
                                    <li>
                                        <NavLink
                                            to="/service"
                                            className="nav-link scrollto font-myFont"
                                            href="#services"
                                        >
                                            Services
                                        </NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink
                                            to="/branch"
                                            className="nav-link scrollto font-myFont"
                                            href="#services"
                                        >
                                            Branches
                                        </NavLink>
                                    </li> */}
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

                                    {/* <a
                                        href="tel:02347276438"
                                        className="text-white nav-button btn btn-sm btn-warning ml-5"
                                    >
                                        <i
                                            class="fas fa-phone-alt"
                                            style={{
                                                padding: "0 5px 0 0",
                                            }}
                                        ></i>
                                        02347-276438
                                    </a> */}
                                    {/* <i
                                            class="fas fa-facebook-alt"
                                            style={{
                                                padding: "10px",
                                            }}
                                        ></i> */}
                                    <div className="flex navbar px-5">
                                        <a style={{ fontSize: 20}} href="facebook.com" target="_blank">
                                            <i style={{ color: "#4267B2", fontSize: 30 }} class="fa-brands fa-facebook fa-2xl"></i>
                                        </a>
                                        <a href="instagram.com" target="_blank">
                                            <i style={{ color: "#fb3958", fontSize: 30 }} class="fa-brands fa-instagram fa-2xl"></i>
                                        </a>
                                        <a href="twitter.com" target="_blank">
                                            <i style={{ color: "#1DA1F2", fontSize: 30 }} class="fa-brands fa-twitter fa-2xl"></i>
                                        </a>
                                    </div>


                                    {/* <a
                                        className="text-black font-myFont"
                                        href="/"
                                    >
                                        GSTIN Number: 27AAAAM0585H1ZM
                                    </a> */}
                                </ul>
                            </nav>
                        </div>
                        {/* </header> */}
                    </div>
                    {/* <div className="nav-header">
                        <h6 className="text-center py-1">
                            <b>Shrisatya Multipurpose Nidhi Limited-</b>{" "}
                            "Leading all the common people to prosperity."
                            GSTIN Number: 27AAAAM0585H1ZM
                        </h6>
                    </div> */}
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
                                        {/* <li className="my_li font-myFont mb-2">
                                            <NavLink to="/branch">
                                                Branches
                                            </NavLink>
                                        </li> */}
                                        {/* <li className="my_li font-myFont mb-2">
                                            <NavLink to="/plan">Plan</NavLink>
                                        </li> */}
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
