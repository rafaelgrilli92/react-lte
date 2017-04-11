import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
	name: PropTypes.string.isRequired,
	cssModifier: PropTypes.string
}

const Icon = ({name, cssModifier}) => <i className={classNames('fa', `fa-${name}`, cssModifier)}></i>;
Icon.propTypes = propTypes;

export default Icon;