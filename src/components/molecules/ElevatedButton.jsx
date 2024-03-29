import PropTypes from "prop-types";
import React from "react";
import { classNames } from "../../utils";
import Text from "../atoms/Text";

function ElevatedButton(props) {
  if (props.to) {
    return (
      <a
        href={props.to ? props.to : "#"}
        rel="noreferrer"
        target={props.external ? "_blank" : ""}
        className={classNames(
          "rounded-md inline-flex items-center justify-center border border-transparent bg-indigo-600 hover:bg-indigo-700 drop-shadow-xl",
          props.className,
          props.compact ? "px-4 py-1" : "px-8 py-3 md:py-4 md:px-1,0"
        )}
      >
        <Text button className="text-white">
          {props.children}
        </Text>
      </a>
    );
  } else {
    return (
      <button
        onClick={props.onClick}
        className={classNames(
          "rounded-md inline-flex items-center justify-center border border-transparent bg-indigo-600 hover:bg-indigo-700 drop-shadow-xl",
          props.className,
          props.compact ? "px-4 py-1" : "px-8 py-3 md:py-4 md:px-8"
        )}
      >
        <Text button className="text-white">
          {props.children}
        </Text>
      </button>
    );
  }
}

ElevatedButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  compact: PropTypes.bool,
  to: PropTypes.string,
  external: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ElevatedButton;
