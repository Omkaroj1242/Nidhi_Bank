/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "About Us", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Testimonials", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="w-full bg-blue-500 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
            <div>
            <img
                className="hidden lg:block h-8 w-auto text-center"
                src="/Images/bank.jpeg"
                alt="Workflow"
              /></div>
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
              
              <div className="flex-1 flex items-center justify-center">
              
                <div className="flex-shrink-0 flex items-center">
                <img
                className="lg:hidden block h-8 w-auto text-center"
                src="/Images/bank.jpeg"
                alt="Workflow"
              />
                  <h1 className="lg:block w-auto text-center text-black text-xl font-bold font-myFont">Manmandir</h1>
                </div>
                <div className="hidden lg:block sm:ml-6">
                  <div className="flex mx-4 space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-white text-base text-blue-700"
                            : "text-blue-700 hover:bg-gray-300 hover:text-black",
                          "px-3 py-2 rounded-md text-base font-myFont"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
              <h1>8974562241</h1></div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-blue-700-700 text-blue-700"
                      : "text-blue-700 hover:bg-gray-5  00 hover:text-gray-600",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
