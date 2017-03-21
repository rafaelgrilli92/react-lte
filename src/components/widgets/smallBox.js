import React, { PropTypes } from 'react';

import Icon from 'components/popular/icon';

const SmallBox = ({children, color = 'aqua', icon, title, text}) => {
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
    </div>
  );
}

SmallBox.propTypes = {
  color: PropTypes.string, // aqua (default), green, yellow, red
  icon: PropTypes.string, // just font-awesome name e.g.: envelope-o
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

const SmallBoxFooter = ({children}) => <div className="small-box-footer">{ children }</div>

export default SmallBox;
export { SmallBoxFooter };