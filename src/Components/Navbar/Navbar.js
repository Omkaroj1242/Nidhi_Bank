/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink} from "react-router-dom";

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-blue-500 md:px-10">
      {({ open }) => (
        <>
          <div className="bg-blue-500 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Laptop Navbar */}

              <header id="header" className="container align-items-center bg-blue-500">
                <div className="flex align-items-center justify-content-between">
                  <div className="flex-1 flex lg:block items-center justify-center px-2">
                    <h1 className="logo flex h-8">
                      <img
                        src="Images/bank.jpeg"
                        alt=""
                        style={{ height: "40px", width: "40px" }}
                        className="mx-2"
                      />
                      <NavLink
                        to="/"
                        className="text-black font-myFont md:text-3xl text-2xl"
                      >
                        Manmandir Bank
                      </NavLink>
                    </h1>
                  </div>
                  <nav id="navbar" className="navbar">
                    <ul>
                      <li>
                        <NavLink
                          to="/about"
                          className="nav-link scrollto font-myFont"
                          href="#about"
                        >
                          About
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
                          to="/plan"
                          className="nav-link scrollto font-myFont "
                          href="#portfolio"
                        >
                          Plan
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          className="nav-link scrollto font-myFont"
                          href="#team"
                        >
                          Faq
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

                      <button class="btn btn-warning">
                        <a
                          href="tel:+918974562241"
                          className="text-black text-sm px-1"
                        >
                          8974562241
                          <i
                            class="fa fa-phone"
                            style={{ "font-size": "20px" }}
                          ></i>
                        </a>
                      </button>
                    </ul>
                  </nav>
                </div>
              </header>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-500 text-center">
              <Disclosure.Button>
                <div className="flex">
                  <ul className="flex-col">
                    <li className="my_li font-myFont mb-2">
                      <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li className="my_li font-myFont mb-2">
                      <NavLink to="/service">Service</NavLink>
                    </li>
                    <li className="my_li font-myFont mb-2">
                      <NavLink to="/invest">Invest</NavLink>
                    </li>
                    <li className="my_li font-myFont mb-2">
                      <NavLink to="/faq">FAQ</NavLink>
                    </li>
                    <li className="mx-3 my_li font-myFont mb-2">
                      <NavLink to="/notice">Notice</NavLink>
                    </li>
                    <li className="my_li font-myFont mb-2">
                      <NavLink to="/contact">Contact Us</NavLink>
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
