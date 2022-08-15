import PropTypes from "prop-types";
import React from "react";
import Text from "../atoms/Text";

ArticleCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
};

function ArticleCard(props) {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <div
        className="max-w-sm h-auto mx-auto my-2 rounded overflow-hidden shadow-lg transition ease-in duration-200 hover:bg-indigo-500 hover:text-white">
        <img className="object-cover aspect-video bg-white" src={props.imageUrl} alt="Volcano" />
        <div className="px-3 py-2 md:px-6 md:py-4">
          <Text body2 className="line-clamp-2 mb-2">{props.title}</Text>
          <Text caption className="line-clamp-4 leading-tight">{props.description}</Text>
        </div>
        <div className="px-3 pb-2 md:px-6 md:pb-2">
          {props.tags.map((tag) => (
            <Text overline
                  className="inline-block bg-gray-100 hover:bg-gray-200 bg-opacity-50 rounded-md px-3 py-1 text-gray-700 mr-1 mb-1 md:mr-2 md:mb-2">{tag}</Text>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ArticleCard;