import { faGithub, faReact, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf, faHandSpock, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import "animate.css";

import React, { Component, useState } from "react";
import { Helmet } from "react-helmet";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import FadeImage from "../components/atoms/FadeImage";
import PingNotification from "../components/atoms/PingNotification";
import Text from "../components/atoms/Text";
import ArticleCard from "../components/molecules/ArticleCard";

import ElevatedButton from "../components/molecules/ElevatedButton";
import InterestCard from "../components/molecules/InterestCard";
import ProjectCard from "../components/molecules/ProjectCard";
import SpotifyCard from "../components/molecules/SpotifyCard";
import Navbar from "../components/organisms/Navbar";
import articles from "../data/articles";
import interests from "../data/interests";
import projects from "../data/projects";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Saddam Sinatrya Jalu Mukti</title>
        </Helmet>
        <Navbar />
        <HeroSection />
        <PortfolioSection />
        <ArticlesSection />
        <ContactSection />
      </div>
    );
  }
}

const HeroSection = () => {
  return (
    <main
      className="container py-12 md:py-16 lg:py-20 grid grid-cols-none md:grid-cols-3 items-center md:gap-10 lg:gap-20"
      id="about-me">
      <div className="hidden md:block">
        <FadeImage
          src="/images/avatar.png"
          alt="Avatar Meta"
          className="animate__animated animate__fadeInUp mb-4"
        />
        <SpotifyCard url="" />
      </div>
      <div className="md:col-span-2">
        <Text headline4 className="text-indigo-600 mb-4">
          <FontAwesomeIcon
            icon={faHandSpock}
            className="text-orange-500 mr-4 animate__animated animate__wobble animate__delay-1s animate__repeat-3"
          />
          <span>Introduce me,</span>
        </Text>
        <Text headline2 className="mb-4 sm:max-w-4xl">
          Saddam Sinatrya Jalu Mukti
        </Text>
        <Text body1 className="sm:max-w-xl mb-6">
          A passionate and rational developer who wants to learn and evolve with a team. Experienced with the
          latest cutting-edge development tools and tech stack.
        </Text>
        <div className="mb-6">
          <Text headline5 className="mb-2">
            Find some common ground
          </Text>
          <div className="flex gap-0 sm:gap-4 md:gap-6">
            <div className="shrink">
              {interests
                .slice(0, 3)
                .map((item, i) => (
                  <InterestCard
                    key={`interest-${i}`}
                    name={item.name}
                    src={item.src}
                    alt={item.alt}
                    href={item.href}
                  />
                ))}
            </div>
            <div className="shrink">
              {interests
                .slice(3)
                .map((item, i) => (
                  <InterestCard
                    key={`interest-${i}`}
                    name={item.name}
                    src={item.src}
                    alt={item.alt}
                    href={item.href}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="sm:flex sm:justify-center lg:justify-start">
          <PingNotification>
            <ElevatedButton external
              to="https://docs.google.com/document/d/1xLH3Dk8vcmizpPnb9Z0KvpRQFQuP8rbjqpbbZjcJFfM/view?usp=sharing">
              <FontAwesomeIcon icon={faFilePdf} className="mr-4" />
              <span>Download CV</span>
            </ElevatedButton>
          </PingNotification>
        </div>
      </div>
    </main>
  );
};

const PortfolioSection = () => {
  let [open, setOpen] = useState(false);
  let [project, setProject] = useState(projects[0])

  return (
    <Fragment>
      <section className="bg-indigo-700" id="portfolio">
        <div className="container py-12 md:py-16 lg:py-20 items-center">
          <Text headline4 className="text-white text-center mb-4">
            My Portfolio
          </Text>
          <Text body2 className="text-white text-center max-w-4xl mx-auto">
            I've been learning many programming languages since 2016. Programming isn't just about coding as
            long as it works on my machine, but also developing something artistic. Imagine all the code
            works each other, forming a beautiful framework with clean and efficient code. Your program goes
            beyond source code because it's maintainable. However, here are some my achievement.
          </Text>
        </div>
      </section>
      <section className="-mt-10 mb-8">
        <div
          className="container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {projects.map((item, i) => (
            <ProjectCard
              key={`projects-${i}`}
              name={item.name}
              src={item.src}
              onClick={(event) => {
                event.stopPropagation();
                setOpen(true);
                setProject(item);
              }}
            />
          ))}
        </div>
        <div className="container flex justify-center">
          <ElevatedButton external to="https://github.com/myxzlpltk">
            <FontAwesomeIcon icon={faGithub} className="mr-4" />
            <span>See more at Github</span>
          </ElevatedButton>
        </div>
      </section>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="mb-4 text-lg leading-6 font-medium text-gray-900 text-center">
                      {project.name}
                    </Dialog.Title>
                    <Carousel className="mb-2">
                      {project.images.map((image, i) => (
                        <div key={`carousel-${i}`}>
                          <img src={image} alt={`Carousel ${i + 1}`} />
                        </div>
                      ))}
                    </Carousel>
                    <p className="text-sm text-gray-500">{project.description}</p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <ElevatedButton key="button-close" compact to={e => e.preventDefault()}
                    className="inline-block mx-2 bg-red-600 hover:bg-red-700"
                    onClick={() => setOpen(false)}>Close</ElevatedButton>
                  {project.buttons.map((button, i) => (
                    <ElevatedButton key={`button-project-${i}`} external compact to={button.link}
                      className="inline-block mx-2">
                      {button.title}
                    </ElevatedButton>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
};

const ArticlesSection = () => {
  return (
    <section className="bg-white" id="articles">
      <div className="container py-6 md:py-8 lg:py-10">
        <Text headline4 className="text-left mb-4">Read My Articles</Text>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {articles.map((article, i) => (
            <div key={`article-${i}`}>
              <ArticleCard imageUrl={article.imageUrl}
                title={article.title}
                description={article.description}
                tags={article.tags}
                url={article.url} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  let contacts = [
    { icon: faTwitter, href: "https://twitter.com/myxzlpltk", name: "Twitter" },
    { icon: faGithub, href: "https://github.com/myxzlpltk", name: "Github" },
    { icon: faEnvelope, href: "mailto:saddam.binary@gmail.com", name: "Email" },
  ];

  return (
    <Fragment>
      <div className="h-20 w-full" />
      <section className="bg-indigo-700" id="contacts">
        <div className="container py-6 md:py-8 lg:py-10">
          <div
            className="flex flex-col md:flex-row gap-4 items-center p-16 max-w-5xl mx-auto bg-indigo-900 rounded-lg -mt-24 mb-16 text-white shadow-md">
            <div className="flex-1">
              <Text headline5 className="text-center">
                Start a project
              </Text>
            </div>
            <div className="flex-1">
              <Text body2 className="text-center">
                Interested in working together? We should queue up a chat. I’ll buy the coffee.
              </Text>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center">
                <ElevatedButton to={e => e.preventDefault()}>
                  <span>Let's do this!</span>
                </ElevatedButton>
              </div>
            </div>
          </div>
          <img src="/images/logo-white.svg" alt="Logo" className="h-16 mx-auto mb-4" />
          <Text headline6 className="text-indigo-200 text-center font-light max-w-md mx-auto mb-8">
            Contact me at one of the following
          </Text>
          <div className="flex justify-center items-center mb-8">
            {contacts.map((item, i) => (
              <a key={`contact-${i}`} href={item.href} target="_blank" rel="noreferrer">
                <div
                  key={item.name.toLowerCase()}
                  className="flex items-center justify-center rounded-full border-2 border-white text-white hover:text-indigo-700 hover:bg-white duration-300 mb-4 mx-2 p-4"
                >
                  <FontAwesomeIcon icon={item.icon} />
                </div>
              </a>
            ))}
          </div>
          <Text body2 className="text-white text-center mx-auto">
            <span>Made with</span>
            <Link to="/portal">
              <FontAwesomeIcon icon={faHeart} className="mx-2 text-red-500" fixedWidth />
            </Link>
            <span>and</span>
            <FontAwesomeIcon icon={faReact} className="mx-2" fixedWidth />
          </Text>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
