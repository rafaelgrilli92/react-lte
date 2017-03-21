import React, { PropTypes } from 'react';
import Icon from 'components/popular/icon';

const Button = ({children, color = 'default', iconLeft, iconRight, modifier, type, onClick}) => {
	return (
		<button type={type} onClick={onClick} className={`btn btn-${color} ${modifier}`} >
		{ iconLeft && (<Icon />) }
		{ children }
		{ iconRight }
		</button>
	);
}
Button.propTypes = {
  color: PropTypes.string, // default, green, yellow, red
  modifier: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
}
export default Button;