import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCheckCircle, faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Text from "../atoms/Text";

function Timeline(props) {
  return (
    <React.Fragment>
      {props.data.map((item) => (
        <div className="flex text-white">
          <div className="shrink mr-4 mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
            </div>
            <div
              className={classNames(
                "w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center",
                item.status ? "bg-green-500" : "bg-gray-500"
              )}
            >
              <FontAwesomeIcon icon={item.status ? faCheckCircle : faClock} />
            </div>
          </div>
          <Link
            to={`//${item.href}`}
            className={classNames(
              "p-4 rounded-xl my-2 mr-auto shadow w-full",
              item.status
                ? "bg-green-500 hover:bg-green-700"
                : "bg-gray-500 hover:bg-gray-700"
            )}
          >
            <Text subtitle2>{item.name}</Text>
            <Text body1>
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              {item.description}
            </Text>
          </Link>
        </div>
      ))}
    </React.Fragment>
  );
}

Timeline.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Timeline;
