import PropTypes from "prop-types";
import React from "react";
import { classNames } from "../../utils";

function Text(props) {
  if (props.headline1) {
    return (
      <h1
        className={classNames(
          props.className,
          "text-7xl font-serif font-extrabold tracking-tighte,r"
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
          "text-5xl font-serif font-extrabold tracking-tight"
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
          "text-4xl font-serif font-bold tracking-normal"
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
          "text-3xl font-serif font-bold tracking-wide"
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
          "text-2xl font-serif font-bold tracking-normal"
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
          "text-lg font-serif font-bold tracking-wide"
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
          "text-base md:text-base lg:text-lg font-serif font-normal tracking-normal"
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
          "text-sm md:text-base lg:text-lg font-serif font-semibold tracking-tighter"
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
          "text-xs md:text-sm lg:text-base font-serif font-normal tracking-normal"
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
          "text-xs md:text-sm lg:text-base font-serif font-semibold tracking-tighter"
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
          "text-sm md:text-base font-serif font-medium tracking-tighter"
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
          "text-xs md:text-sm font-serif font-normal italic tracking-normal"
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
          "text-xs md:text-sm font-serif font-semibold tracking-normal"
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
