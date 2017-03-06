import React, { Component, PropTypes } from 'react';

export default class InfoBox extends Component {
  PropTypes = {
    color: PropTypes.string, // aqua (default), green, yellow, red
    fullColored: PropTypes.bool,
    icon: PropTypes.string, // just font-awesome name e.g.: envelope-o
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    var { 
      color = 'aqua', 
      fullColored,
      icon, 
      title, 
      text 
    } = this.props;

    return (
      <div className={"info-box" + (fullColored ? " bg-" + color : "")}>
        <span className={"info-box-icon" + (!fullColored ? " bg-" + color : "")}><i className={(icon ? 'fa fa-' + icon : '')}></i></span>
        <div className="info-box-content">
          <span className="info-box-text">{ title }</span>
          <span className="info-box-number">{ text }</span>
          { this.props.children }
        </div>
      </div>
    );
  }
}
