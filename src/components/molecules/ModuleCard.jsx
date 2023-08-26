import PropTypes from "prop-types";
import React from "react";
import Image from "react-image-webp";
import Text from "../atoms/Text";
import { Link } from "react-router-dom";

ModuleCard.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modules: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageUrlWebp: PropTypes.string.isRequired,
};

function ModuleCard(props) {
  return (
    <Link to={`modules/${props.id}`}>
      <div className="max-w-sm h-auto mx-auto my-2 rounded overflow-hidden shadow-lg transition ease-in duration-200 hover:bg-indigo-500 hover:text-white">
        <Image
          src={props.imageUrl}
          webp={props.imageUrlWebp}
          className="object-cover aspect-video bg-white"
          alt={props.title}
        />
        <div className="px-3 py-2 md:px-6 md:py-4">
          <Text body2 className="line-clamp-2 mb-2">
            {props.title}
          </Text>
          <Text caption className="line-clamp-4 leading-tight">
            {props.modules.length} Modules Available
          </Text>
        </div>
      </div>
    </Link>
  );
}

export default ModuleCard;
