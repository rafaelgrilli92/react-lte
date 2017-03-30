import React, { PropTypes } from 'react';

import { Icon } from '../index';

const propTypes = {
  color: PropTypes.string, // aqua (default), green, yellow, red
  footer: PropTypes.node,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

const defaultProps = {
  color: 'aqua'
};

const SmallBox = ({children, color, footer, icon, title, text}) => {
  return (
    <div className={`small-box bg-${color}`}>
      <div className="inner">
        <h3>{ title }</h3>
        <p>{ text }</p>
      </div>
      {
        icon !== null && (
          <div className="icon">
            <Icon name={icon} />
          </div>
        )
      }
      { children }
      {
        footer && (<div className="small-box-footer">{ footer }</div>)
      }
    </div>
  );
}

SmallBox.propTypes = propTypes;
SmallBox.defaultProps = defaultProps;

export default SmallBox;