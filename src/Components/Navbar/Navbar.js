/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink, useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

export default function Example() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

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
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
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
                  <NavLink
                    className=" text-xl font-bold font-myFont home"
                    to="/"
                  >
                    Manmandir Bank
                  </NavLink>
                </div>
              </div>
              <div className="hidden lg:block sm:ml-6 my-auto">
                <div className="flex mx-4 mt-3.5 items-center justify-center text-center">
                  <ul className="flex my_ul">
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                      <NavLink to="/service">Service</NavLink>
                    </li>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                      <NavLink to="/plan">Plan</NavLink>
                    </li>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                      <NavLink to="/faq">FAQ</NavLink>
                    </li>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                      <NavLink to="/notice">Notice</NavLink>
                    </li>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="hidden lg:block -mt-1">
                <a href="tel:+918974562241">
                  <FaPhoneAlt className="hidden lg:block" />
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-500 text-center">
              <Disclosure.Button>
                <div className="flex">
                  <ul className="flex-col">
                    <li className="my_li font-myFont">
                      <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li className="my_li font-myFont">
                      <NavLink to="/service">Service</NavLink>
                    </li>
                    <li className="my_li font-myFont">
                      <NavLink to="/invest">Invest</NavLink>
                    </li>
                    <li className="my_li font-myFont">
                      <NavLink to="/faq">FAQ</NavLink>
                    </li>
                    <li className="mx-3 my_li font-myFont">
                      <NavLink to="/notice">Notice</NavLink>
                    </li>
                    <li className="my_li font-myFont">
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
