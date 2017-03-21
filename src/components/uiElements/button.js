import React, { PropTypes } from 'react';
import Icon from 'components/uiElements/icon';

const Button = ({children, color = 'default', disabled, iconLeft, iconRight, modifier, text, type = 'button', onClick}) => {
	return (
		<button type={type} disabled={disabled} onClick={onClick} className={`btn btn-${color} ${modifier}`} >
		{ iconLeft && (<span><Icon name={iconLeft} />&nbsp;</span>) }
		{ text }
		{ children }
		{ iconRight && (<span>&nbsp;<Icon name={iconRight} /></span>) }
		</button>
	);
}
Button.propTypes = {
  color: PropTypes.string, // default, primary, danger, warning
  disabled: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  modifier: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}
export default Button;