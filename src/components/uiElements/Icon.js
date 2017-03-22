import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
	name: PropTypes.string.isRequired,
	modifier: PropTypes.string
}

const Icon = ({name, modifier}) => <i className={classNames('fa', `fa-${name}`, modifier)}></i>;
Icon.propTypes = propTypes;

export default Icon;