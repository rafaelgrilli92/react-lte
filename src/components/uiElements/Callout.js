import React, { PropTypes } from 'react';
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

const Callout = props => {
	return (
		<div className={("callout callout-" + props.color)}>
      { props.title && <h4>{ props.icon && <Icon name={props.icon}/> } { props.title }</h4> }
      { props.children && <p>{props.children}</p> }
	  </div>
	)
}

Callout.propTypes = propTypes;
Callout.defaultProps = defaultProps;

export default Callout;