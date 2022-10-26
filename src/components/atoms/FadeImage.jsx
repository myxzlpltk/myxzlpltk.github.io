import PropTypes from "prop-types";
import React from "react";
import Image from "react-image-webp";
import {classNames} from "../../utils";

function FadeImage(props) {
  return (
    <div className="fade-image">
      <Image src={props.src} webp={props.webp} alt={props.alt} className={classNames("w-100", props.className)} />
    </div>
  );
}

FadeImage.propTypes = {
  src: PropTypes.string.isRequired,
  webp: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FadeImage;
