import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavItem from "../molecules/NavItem";
import PropTypes from "prop-types";
import React from "react";
import { classNames } from "../../utils";

function Navbar(props) {
  const navigation = [
    { name: "About Me", href: "#", current: true },
    { name: "Portfolio", href: "#", current: false },
    { name: "Contacts", href: "#", current: false },
  ];

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-white border-b-2">
      {({ open }) => (
        <React.Fragment>
          <div className="container">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faBars}
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0-0 flex items-center">
                  <img src="/images/logo.svg" alt="Logo" className="h-10" />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavItem
                        name={item.name}
                        href={item.href}
                        current={item.current}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavItem
                  name={item.name}
                  href={item.href}
                  current={item.current}
                  block
                />
              ))}
            </div>
          </Disclosure.Panel>
        </React.Fragment>
      )}
    </Disclosure>
  );
}

Navbar.propTypes = {};

export default Navbar;
