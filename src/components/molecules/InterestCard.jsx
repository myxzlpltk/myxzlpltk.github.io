import PropTypes from "prop-types";
import React from "react";
import Text from "../atoms/Text";

function InterestCard(props) {
  return (
    <a href={props.href}>
      <div className="flex items-center gap-2 interest-box hover:bg-gray-200 py-1 px-2 rounded-md cursor-pointer">
        <img src={props.src} alt={props.alt} className="inline h-8 w-8" />
        <Text body2 className="justify-self-start text-gray-800">
          {props.name}
        </Text>
      </div>
    </a>
  );
}

InterestCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default InterestCard;
