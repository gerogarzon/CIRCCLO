import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import circclo from "../assets/circclo (4).png";

import "./navbar.css";

const navigation = [
  { name: "¿Cómo Funciona?", href: "#firstPage", current: false },
  { name: "Beneficios", href: "#secondPage", current: false },
  { name: "¡Quiero Sumarme!" , href: "#thirdPage", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    var prevHash = window.location.hash;
    window.setInterval(function () {
      if (window.location.hash !== prevHash) {
        prevHash = window.location.hash;
        setCurrentPage(prevHash);
      }
    }, 100);
  });

  return (
    <Disclosure as="nav" className="navbar_fixed">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center"></div>
                <div className="hidden sm:ml-6 sm:block" id="menu">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-gray-800"
                            : "text-gray-800 hover:text-gray-800",
                          "px-3 py-2 rounded-md text-lg font-medium hover:outline outline-blue-700",
                          item.href === currentPage ? "currentPage" : ""
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-md text-sm ">
                      <p className="p-1 text-white text-3xl  hover:outline outline-blue-700 outline-offset-2 rounded-xl">
                        <img
                          className="circclo-logo"
                          alt="circclo-logo"
                          src={circclo}
                        ></img>
                      </p>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-blue-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.linkedin.com/company/circclo/"
                            className={classNames(
                              active ? "bg-blue-700 text-white" : "",
                              "block px-4 py-2 text-sm text-white "
                            )}
                          >
                            Linkedin
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#thirdPage"
                            className={classNames(
                              active ? "bg-blue-700 " : "",
                              "block px-4 py-2 text-sm text-white "
                            )}
                          >
                            ¡Quiero Sumarme!
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-gray-800"
                      : "hover:bg-violet-700 hover:text-gray-800",
                    "block px-3 py-2 rounded-md text-gray-800 font-medium hover:bg-violet-700"
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
