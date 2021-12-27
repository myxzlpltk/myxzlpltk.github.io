import { faBars, faFilePdf, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { classNames } from "../utils";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Saddam Sinatrya Jalu Mukti</title>
        </Helmet>
        <NavbarSection />
        <HeroSection />
      </div>
    );
  }
}

function NavbarSection() {
  const navigation = [
    { name: "About Me", href: "#", current: true },
    { name: "Portfolio", href: "#", current: false },
    { name: "Contacts", href: "#", current: false },
  ];

  return (
    <Disclosure as="nav" className="bg-white border-b-2">
      {({ open }) => (
        <Fragment>
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
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-900 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  );
}

function HeroSection() {
  const interests = [
    {
      name: "Android App Development",
      url: "/icons/icons8-flutter.svg",
      alt: "Flutter",
    },
    {
      name: "Web App Development",
      url: "/icons/icons8-react.svg",
      alt: "React",
    },
    { name: "Data Science", url: "/icons/icons8-python.svg", alt: "Python" },
    {
      name: "Cryptocurrency & NFT",
      url: "/icons/icons8-ethereum.svg",
      alt: "Ethereum",
    },
    { name: "Metaverse", url: "/icons/icons8-meta.svg", alt: "Python" },
  ];

  return (
    <main className="container py-10 sm:py-12 md:py-16 lg:py-20 min-h-screen">
      <div className="flex flex-wrap items-center">
        <div className="hidden md:block basis-2/6">
          <div className="fade-image">
            <img src="/images/avatar.png" alt="Avatar Meta" className="w-100" />
          </div>
          <p className="text-center py-4 font-mono tracking-tighter">
            Auto Generated by&nbsp;
            <Link to="//readyplayer.me" className="text-blue-600">
              Ready Player Me
            </Link>
          </p>
        </div>
        <div className="basis-full md:basis-4/6 md:pl-10 lg:pl-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 font-mono">
            Introduce me,
          </h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900 font-spaceMono">
            Saddam Sinatrya Jalu Mukti
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-spaceMono">
            A passionate and rational developer who wants to learn and evolve
            with a team. Experienced with the latest cutting-edge development
            tools and tech stack.
          </p>
          <div className="my-4">
            <h3 className="text-xl sm:text-1xl md:text-2xl font-bold font-mono mb-4">
              My Interests
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((item) => (
                <div className="flex items-center gap-2">
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="inline h-8 w-8"
                  />
                  <span className="font-mono text-gray-800 text-lg justify-self-start">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 drop-shadow-xl"
              >
                <FontAwesomeIcon icon={faFilePdf} className="mr-4" />
                <span className="font-spaceMono">Download CV</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
