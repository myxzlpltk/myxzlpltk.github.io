import PropTypes from "prop-types";
import React from "react";

function PingNotification(props) {
  return (
    <div className="relative inline-flex">
      {props.children}
      <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
      </span>
    </div>
  );
}

PingNotification.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PingNotification;
