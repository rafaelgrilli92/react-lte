import React, { PropTypes } from 'react';
import classNames from 'classnames';
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

const Alert = ({
    title,
    icon,
    color,
    children
}) => {
    return (
        <div className={classNames('alert alert-dismissible', `alert-${color}`)}>
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            { title && <h4>{ icon && <Icon name={icon} cssModifier="icon"/> } { title }</h4> }
            { children && <p>{children}</p> }
        </div>
    )
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;