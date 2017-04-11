import React, { PropTypes } from 'react';
import classNames from 'classNames';
import { Icon } from '../index';

const propTypes = {
	/*
  * Sets the title
  */
	title: PropTypes.string,
	
	/*
  * Sets the title's icon on the left position
  */
	icon: PropTypes.string,

	/*
  * Sets the component color
  */
	color: PropTypes.oneOf(['danger', 'info', 'warning', 'success']),
};

const defaultProps = {
	color: 'danger'
}

const Callout = ({
	title,
	icon,
	color,
	children
}) => {
	return (
		<div className={classNames('callout', `callout-${color}`)}>
      { title && <h4>{ icon && <Icon name={icon}/> } { title }</h4> }
      { children && <p>{children}</p> }
	  </div>
	)
}

Callout.propTypes = propTypes;
Callout.defaultProps = defaultProps;

export default Callout;