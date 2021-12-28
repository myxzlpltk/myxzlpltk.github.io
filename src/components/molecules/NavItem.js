import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../utils";
import { Link } from "react-router-dom";
import Text from "../atoms/Text";

function NavItem(props) {
  return (
    <Link
      key={props.name}
      to={props.href}
      className={classNames(
        props.current
          ? "bg-indigo-900 text-white"
          : "text-indigo-900 hover:bg-indigo-500 hover:text-white",
        props.block ? "block w-full" : "inline-block",
        "px-3 py-2 rounded-md"
      )}
      aria-current={props.current ? "page" : undefined}
    >
      <Text className="font-sourceCodePro text-sm font-medium">
        {props.name}
      </Text>
    </Link>
  );
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  current: PropTypes.bool,
  block: PropTypes.bool,
};

export default NavItem;
