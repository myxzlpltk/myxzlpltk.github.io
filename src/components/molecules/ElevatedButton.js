import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { classNames } from "../../utils";
import Text from "../atoms/Text";

function ElevatedButton(props) {
  return (
    <Link
      to="#"
      className={classNames(
        "rounded-md flex items-center justify-center px-8 py-3 border border-transparent bg-indigo-600 hover:bg-indigo-700 md:py-4 md:px-10 drop-shadow-xl",
        props.className
      )}
    >
      <Text button className="text-white">{props.children}</Text>
    </Link>
  );
}

ElevatedButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ElevatedButton;
