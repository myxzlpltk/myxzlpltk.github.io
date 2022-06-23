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
      <div className="max-w-sm h-auto mx-auto my-2 rounded overflow-hidden shadow-lg">
        <img className="object-cover h-48 w-96 bg-white" src={props.imageUrl} alt="Volcano" />
        <div className="px-6 py-4">
          <Text body2 className="line-clamp-2 mb-2">{props.title}</Text>
          <Text caption className="line-clamp-4 leading-tight">{props.description}</Text>
        </div>
        <div className="px-6 pb-2">
          {props.tags.map((tag) => (
            <Text overline
                  className="inline-block bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-1 text-gray-700 mr-2 mb-2">{tag}</Text>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ArticleCard;