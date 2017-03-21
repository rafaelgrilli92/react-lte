import React, { PropTypes } from 'react';

const Icon = ({name, modifier}) => <i className={`fa fa-${name} ${modifier || ""}`}></i>;
Icon.propTypes = {
	name: PropTypes.string.isRequired,
	modifier: PropTypes.string
};

export default Icon;