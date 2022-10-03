import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
const data = [
  { name: "Home", link: "/" },
  { name: "Anime", link: "/anime" },
  { name: "My List", link: "/mylist" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex ">
              <div className="text-gray-200 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                <Link href="/">Jhatu ki amma randi</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex place-content-end items-baseline space-x-4">
                  <div className=" hover:bg-gray-700 text-gray-200 px-3 py-2 rounded-md text-sm font-medium"></div>
                  {data.map((e) => (
                    <>
                      <Link href={e.link}>
                        <div className="text-gray-200 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                          {e.name}
                        </div>
                      </Link>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {data.map((e) => (
                  <>
                    <Link href={e.link}>
                      <div className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        {e.name}
                      </div>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
