import React from "react";
import { Navigate, useParams } from "react-router-dom";
import projects from "../data/projects.json";
import { Carousel } from "react-responsive-carousel";
import { isWebpSupported } from "react-image-webp/dist/utils";
import Text from "../components/atoms/Text";
import ElevatedButton from "../components/molecules/ElevatedButton";
import Navbar from "../components/organisms/Navbar";
import { iconAlt } from "../utils";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((e) => e.id === projectId);

  if (project === undefined) {
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      <Navbar />
      <div className="container py-8 md:py-12 lg:py-16 grid grid-cols-12 gap-x-6">
        <Text
          headline4
          className="col-span-12 block md:hidden text-center mb-4"
        >
          {project.name}
        </Text>

        <Carousel
          className="col-span-12 md:col-span-6 xl:col-span-7"
          showIndicators={false}
          showThumbs={true}
          swipeable={true}
          emulateTouch={true}
        >
          {project.images.map((image, i) => (
            <div key={`carousel-${i}`}>
              {isWebpSupported() ? (
                <img src={project.imagesWebp[i]} alt={`Carousel ${i + 1}`} />
              ) : (
                <img src={image} alt={`Carousel ${i + 1}`} />
              )}
            </div>
          ))}
        </Carousel>

        <div className="col-span-12 md:col-span-6 xl:col-span-5">
          <Text headline4 className="hidden md:block text-left mb-4">
            {project.name}
          </Text>

          <Text body1 className="mb-4">
            {project.description}
          </Text>

          <p className="text-sm font-semibold mb-2">Tech Stack:</p>
          <div className="flex gap-2 mb-4">
            {project.stack.map((stack) => (
              <img
                key={`stack-${stack}`}
                src={`https://raw.githubusercontent.com/gilbarbara/logos/main/logos/${stack}.svg`}
                alt={iconAlt(stack)}
                title={iconAlt(stack)}
                className="inline h-6	w-auto"
              />
            ))}
          </div>

          <div className="flex space-x-2">
            {project.buttons.map((button, i) => (
              <ElevatedButton
                key={`button-project-${i}`}
                external
                compact
                to={button.link}
                className="inline-block"
              >
                {button.title}
              </ElevatedButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
