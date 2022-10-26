import { faFilePdf, faHandSpock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import interests from "../../data/interests.json";
import FadeImage from "../atoms/FadeImage";
import PingNotification from "../atoms/PingNotification";
import Text from "../atoms/Text";
import ElevatedButton from "../molecules/ElevatedButton";
import InterestCard from "../molecules/InterestCard";
import YoutubeCard from "../molecules/YoutubeCard";

const HeroSection = () => {
  return (
    <main
      className="container py-12 md:py-16 lg:py-20 grid grid-cols-none md:grid-cols-3 items-center md:gap-10 lg:gap-20"
      id="about-me"
    >
      <div className="hidden md:block">
        <FadeImage
          src="/images/avatar.jpg"
          webp="/images/avatar.webp"
          alt="Avatar Meta"
          className="animate__animated animate__fadeInUp mb-4"
        />
        <YoutubeCard url="" />
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
          A passionate and rational developer who wants to learn and evolve with
          a team. Experienced with the latest cutting-edge development tools and
          tech stack.
        </Text>
        <div className="mb-6">
          <Text headline5 className="mb-2">
            Find some common ground
          </Text>
          <div className="flex gap-0 sm:gap-4 md:gap-6">
            <div className="shrink">
              {interests.slice(0, 3).map((item, i) => (
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
              {interests.slice(3).map((item, i) => (
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
            <ElevatedButton
              external
              to="https://docs.google.com/document/d/1xLH3Dk8vcmizpPnb9Z0KvpRQFQuP8rbjqpbbZjcJFfM/view?usp=sharing"
            >
              <FontAwesomeIcon icon={faFilePdf} className="mr-4" />
              <span>Download CV</span>
            </ElevatedButton>
          </PingNotification>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
