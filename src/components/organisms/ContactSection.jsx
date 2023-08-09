import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Text from "../atoms/Text";
import ElevatedButton from "../molecules/ElevatedButton";

const ContactSection = () => {
  let contacts = [
    { icon: faGithub, href: "https://github.com/myxzlpltk", name: "Github" },
    { icon: faLinkedin, href: "https://www.linkedin.com/in/saddam-mukti", name: "LinkedIn" },
    { icon: faEnvelope, href: "mailto:saddam.coder@gmail.com", name: "Email" },
  ];

  return (
    <Fragment>
      <div className="h-20 w-full" />
      <section className="bg-indigo-700" id="contacts">
        <div className="container py-6 md:py-8 lg:py-10">
          <div className="flex flex-col md:flex-row gap-4 items-center p-16 max-w-5xl mx-auto bg-indigo-900 rounded-lg -mt-24 mb-16 text-white shadow-md">
            <div className="flex-1">
              <Text headline5 className="text-center">
                Start a project
              </Text>
            </div>
            <div className="flex-1">
              <Text body2 className="text-center">
                Interested in working together? We should queue up a chat. I’ll
                buy the coffee.
              </Text>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center">
                <ElevatedButton to="mailto:saddam.coder@gmail.com">
                  <span>Let's do this!</span>
                </ElevatedButton>
              </div>
            </div>
          </div>
          <img
            src="/images/logo-white.svg"
            alt="Logo"
            className="h-16 mx-auto mb-4"
          />
          <Text
            headline6
            className="text-indigo-200 text-center font-light max-w-md mx-auto mb-8"
          >
            Contact me at one of the following
          </Text>
          <div className="flex justify-center items-center mb-8">
            {contacts.map((item, i) => (
              <a
                key={`contact-${i}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
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
              <FontAwesomeIcon
                icon={faHeart}
                className="mx-2 text-red-500"
                fixedWidth
              />
            </Link>
            <span>and</span>
            <FontAwesomeIcon icon={faReact} className="mx-2" fixedWidth />
          </Text>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactSection;
