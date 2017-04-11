import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  color: PropTypes.string, // aqua (default), green, yellow, red
  fullColored: PropTypes.bool,
  icon: PropTypes.string, // just font-awesome name e.g.: envelope-o
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

const defaultProps = {
  color: 'aqua', 
  fullColored: false
}

const InfoBox = ({children, color, fullColored, icon, title, text}) => {
  return (
    <div className={classNames('info-box', {[`bg-${color}`]: fullColored})}>
      <span className={classNames('info-box-icon', {[`bg-${color}`]: !fullColored})}>
        <i className={`fa fa-${icon}`}></i>
      </span>
      <div className="info-box-content">
        <span className="info-box-text">{ title }</span>
        <span className="info-box-number">{ text }</span>
        { children }
      </div>
    </div>
  );
}

InfoBox.propTypes = propTypes;
InfoBox.defaultProps = defaultProps;

export default InfoBox;
