import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../utils";

function Text(props) {
  if (props.headline1) {
    return (
      <h1
        className={classNames(
          props.className,
          "text-7xl font-spaceMono font-extrabold tracking-tighter"
        )}
      >
        {props.children}
      </h1>
    );
  } else if (props.headline2) {
    return (
      <h2
        className={classNames(
          props.className,
          "text-5xl font-spaceMono font-extrabold tracking-tight"
        )}
      >
        {props.children}
      </h2>
    );
  } else if (props.headline3) {
    return (
      <h3
        className={classNames(
          props.className,
          "text-4xl font-spaceMono font-bold tracking-normal"
        )}
      >
        {props.children}
      </h3>
    );
  } else if (props.headline4) {
    return (
      <h4
        className={classNames(
          props.className,
          "text-3xl font-spaceMono font-bold tracking-wide"
        )}
      >
        {props.children}
      </h4>
    );
  } else if (props.headline5) {
    return (
      <h5
        className={classNames(
          props.className,
          "text-2xl font-spaceMono font-bold tracking-normal"
        )}
      >
        {props.children}
      </h5>
    );
  } else if (props.headline6) {
    return (
      <h6
        className={classNames(
          props.className,
          "text-lg font-spaceMono font-bold tracking-wide"
        )}
      >
        {props.children}
      </h6>
    );
  } else if (props.subtitle1) {
    return (
      <p
        className={classNames(
          props.className,
          "text-base font-spaceMono font-normal tracking-wide"
        )}
      >
        {props.children}
      </p>
    );
  } else if (props.subtitle2) {
    return (
      <p
        className={classNames(
          props.className,
          "text-sm font-spaceMono font-medium tracking-wide"
        )}
      >
        {props.children}
      </p>
    );
  } else if (props.body1) {
    return (
      <p
        className={classNames(
          props.className,
          "text-sm font-notoSansMono font-normal tracking-wide"
        )}
      >
        {props.children}
      </p>
    );
  } else if (props.body2) {
    return (
      <p
        className={classNames(
          props.className,
          "text-xs font-notoSansMono font-normal tracking-wide"
        )}
      >
        {props.children}
      </p>
    );
  } else if (props.button) {
    return (
      <p
        className={classNames(
          props.className,
          "text-sm font-notoSansMono font-medium tracking-wider"
        )}
      >
        {props.children}
      </p>
    );
  } else if (props.caption) {
    return (
      <p
        className={classNames(
          props.className,
          "text-xs font-notoSansMono font-normal tracking-wider"
        )}
      >
        {props.children}
      </p>
    );
  } else if (props.overline) {
    return (
      <p
        className={classNames(
          props.className,
          "text-xs font-notoSansMono font-normal tracking-wide"
        )}
      >
        {props.children}
      </p>
    );
  } else {
    return <p className={props.className}>{props.children}</p>;
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  headline1: PropTypes.bool,
  headline2: PropTypes.bool,
  headline3: PropTypes.bool,
  headline4: PropTypes.bool,
  headline5: PropTypes.bool,
  headline6: PropTypes.bool,
  subtitle1: PropTypes.bool,
  subtitle2: PropTypes.bool,
  body1: PropTypes.bool,
  body2: PropTypes.bool,
  button: PropTypes.bool,
  caption: PropTypes.bool,
  overline: PropTypes.bool,
};

export default Text;
