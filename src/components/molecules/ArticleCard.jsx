import PropTypes from "prop-types";
import React from "react";
import Image from "react-image-webp";
import Text from "../atoms/Text";

ArticleCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageUrlWebp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

function ArticleCard(props) {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
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
            {props.description}
          </Text>
        </div>
      </div>
    </a>
  );
}

export default ArticleCard;
