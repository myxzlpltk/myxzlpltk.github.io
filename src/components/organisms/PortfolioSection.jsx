import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { isWebpSupported } from "react-image-webp/dist/utils";
import { Carousel } from "react-responsive-carousel";
import { Fragment } from "react/cjs/react.production.min";
import projects from "../../data/projects.json";
import Text from "../atoms/Text";
import ElevatedButton from "../molecules/ElevatedButton";
import ProjectCard from "../molecules/ProjectCard";
import { Link } from "react-router-dom";
import { iconAlt } from "../../utils";

const PortfolioSection = () => {
  let [open, setOpen] = useState(false);
  let [project, setProject] = useState(projects[0]);

  return (
    <section id="portfolio">
      <div className="bg-indigo-700">
        <div className="container py-12 md:py-16 lg:py-20 items-center">
          <Text headline4 className="text-white text-center mb-4">
            My Portfolio
          </Text>
          <Text body2 className="text-white text-center max-w-4xl mx-auto">
            I've been learning many programming languages since 2016.
            Programming isn't just about coding as long as it works on my
            machine, but also developing something artistic. Imagine all the
            code works each other, forming a beautiful framework with clean and
            efficient code. Your program goes beyond source code because it's
            maintainable. However, here are some my achievement.
          </Text>
        </div>
      </div>
      <div className="-mt-10 mb-8">
        <div className="container flex flex-wrap justify-center mb-8">
          {projects.map((item, i) => (
            <div
              key={`projects-${i}`}
              className="basis-1/2 md:basis-1/3 xl:basis-1/4 p-2"
            >
              <ProjectCard
                name={item.name}
                src={item.src}
                srcWebp={item.srcWebp}
                onClick={(event) => {
                  event.stopPropagation();
                  setOpen(true);
                  setProject(item);
                }}
              />
            </div>
          ))}
        </div>
        <div className="container flex justify-center">
          <ElevatedButton external to="https://github.com/myxzlpltk">
            <FontAwesomeIcon icon={faGithub} className="mr-4" />
            <span>See more at Github</span>
          </ElevatedButton>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
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
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
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
              <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="mb-4 text-lg leading-6 font-medium text-gray-900 text-center"
                    >
                      <Link to={`/projects/${project.id}`}>{project.name}</Link>
                    </Dialog.Title>
                    <Carousel
                      className="mb-2"
                      showIndicators={false}
                      showThumbs={false}
                      swipeable={true}
                      emulateTouch={true}
                    >
                      {project.images.map((image, i) => (
                        <div key={`carousel-${i}`}>
                          {isWebpSupported() ? (
                            <img
                              src={project.imagesWebp[i]}
                              alt={`Carousel ${i + 1}`}
                            />
                          ) : (
                            <img src={image} alt={`Carousel ${i + 1}`} />
                          )}
                        </div>
                      ))}
                    </Carousel>
                    <p className="text-sm text-gray-500 mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      <p className="text-sm font-semibold">Tech Stack:</p>
                      {project.stack.map((stack) => (
                        <img
                          key={`stack-${stack}`}
                          src={`https://raw.githubusercontent.com/gilbarbara/logos/main/logos/${stack}.svg`}
                          alt={iconAlt(stack)}
                          title={iconAlt(stack)}
                          className="inline h-4	w-auto"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <ElevatedButton
                    key="button-close"
                    compact
                    className="inline-block mx-2 bg-red-600 hover:bg-red-700"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </ElevatedButton>
                  {project.buttons.map((button, i) => (
                    <ElevatedButton
                      key={`button-project-${i}`}
                      external
                      compact
                      to={button.link}
                      className="inline-block mx-2"
                    >
                      {button.title}
                    </ElevatedButton>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
};

export default PortfolioSection;
