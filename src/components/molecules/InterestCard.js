import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function InterestCard(props) {
  return (
    <Link to={`//${props.href}`}>
      <div className="inline-flex propss-center gap-2 interest-box hover:bg-gray-200 py-1 px-2 rounded-md cursor-pointer">
        <img src={props.src} alt={props.alt} className="inline h-8 w-8" />
        <span className="font-mono text-gray-800 text-lg justify-self-start">
          {props.name}
        </span>
      </div>
    </Link>
  );
}

InterestCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default InterestCard;
