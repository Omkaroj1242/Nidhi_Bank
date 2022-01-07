/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

export default function Example() {
  return (

    <Disclosure as="nav" className="bg-white  fixed-top">
      {({ open }) => (
        <>

          <div className="container relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-8 w-8" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-8   w-8" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            <div className="flex align-items-center justify-content-between">

              {/* <h1 className="logo flex h-8"> */}
              <img
                src="Images/manmandir1.png"
                alt=""
                style={{ height: "45px", width: "70px" }}
                className="pt-1"
              />
              <NavLink
                to="/"
                className="text-white font-myFont font-bold text-xl py-1 w-full"
              >
                <img
                  src="Images/Asset_2.png"
                  alt=""
                  style={{ height: "50px", width: "160px" }}
                  className=""
                />
              </NavLink>

              {/* </h1> */}
              {/* </div> */}

              <nav id="navbar" className="navbar">
                <ul>
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

                  {/* <button class="">
                    <a href="/" className="text-info">
                      <i
                        class=""
                        style={{ "font-size": "10px", padding: "0 5px 0 0" }}
                      ></i>
                      GSTIN Number-28DFEGY6598VGKP
                    </a>
                  </button> */}

                  <button class="btn btn-warning">
                    <a href="tel:+918974562241" className="text-black">
                      <i
                        class="fas fa-phone-alt"
                        style={{ "font-size": "20px", padding: "0 5px 0 0" }}
                      ></i>
                      8275913992
                    </a>
                  </button>
                </ul>
              </nav>
            </div>
            {/* </header> */}
          </div>
          <div className="nav-header  bg-secondary">
            <button class="">
              <h6 className="text-light" style={{ "font-size": "12px", paddingLeft: "1012px"}}>
                
                GSTIN Number: 28DFEGY6598VGKP
              </h6>
            </button>
          </div>
          {/* </div> */}

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
                      <NavLink to="/branch">Branches</NavLink>
                    </li>
                    <li className="my_li font-myFont mb-2">
                      <NavLink to="/plan">Plan</NavLink>
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
                    <li className="my_li font-myFont mb-2">
                      <NavLink to="/">GSTIN Number-28DFEGY6598VGKP</NavLink>
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
