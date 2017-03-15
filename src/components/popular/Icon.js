import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  PropTypes = {
    bordered: PropTypes.bool,
    className: PropTypes.string,
    inverse: PropTypes.bool,
    fixedWidth: PropTypes.bool,
    flip: PropTypes.string, //horizontal or vertical
    name: PropTypes.string.isRequired,
    pull: PropTypes.string, //right or left
    pulse: PropTypes.bool,
    rotate: PropTypes.number,
    size: PropTypes.number, //maximum 5
    spin: PropTypes.bool,
  }

  render() {
    var renderCss = () => {
      let { bordered, className, inverse, fixedWidth, flip, name, pull, pulse, rotate, size, spin } = this.props;
      let css = "fa fa-" + name;

      css += className ? (" " + className) : "";
      css += bordered ? " fa-border" : "";
      css += inverse ? " fa-inverse" : "";
      css += fixedWidth ? " fa-fw" : "";
      css += flip ? (" fa-flip-" + flip) : "";
      css += pull ? (" fa-pull-" + pull) : "";
      css += pulse ? " fa-pulse" : "";
      css += rotate ? (" fa-rotate" + rotate) : "";
      css += size ? (" fa-" + size + "x") : "";
      css += spin ? " fa-spin" : "";

      return css;

    }

    return (
      <i className={renderCss()}></i>
    );
  }
}
