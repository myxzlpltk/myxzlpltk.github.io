import PropTypes from "prop-types";
import React from "react";
import Text from "../atoms/Text";
import ElevatedButton from "./ElevatedButton";

function ProjectCard(props) {
  return (
    <div className="group rounded-md drop-shadow w-full aspect-video">
      <div
        className="rounded-md absolute inset-0 bg-cover bg-center z-0"
        style={{backgroundImage: `url('${props.src}')`}}
      />
      <div
        className="opacity-0 group-hover:opacity-100 duration-300 flex flex-col items-center gap-4 justify-center absolute inset-0 z-10 bg-gray-900 rounded-md">
        <Text subtitle1 className="text-white">
          {props.name}
        </Text>
        <ElevatedButton compact className="inline-block" onClick={props.onClick}>
          <span className="mr-1">More Info</span>
        </ElevatedButton>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
