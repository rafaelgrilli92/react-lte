import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { Icon } from '../';

const propTypes = {
	breadcrumb: PropTypes.bool, 
	enableReactRouterLink: PropTypes.bool,
	subtitle: PropTypes.string,
	title: PropTypes.string.isRequired
}

const defaultProps = {
	breadcrumb: true
}

class ContentHeader extends Component {	
	renderBreadcrumbs() {
		const breadcrumbs = window.location.pathname.split('/').slice(1);
		const { enableReactRouterLink } = this.props;
		return breadcrumbs.map((link, index) => {
			if (link !== "") {
				if (index === breadcrumbs.length - 1)
					return (<li key={index} className="active">{ link.charAt(0).toUpperCase() + link.slice(1) }</li>);
				else
					return enableReactRouterLink ? (
						<li key={index}><Link to={ link }>{ link.charAt(0).toUpperCase() + link.slice(1) }</Link></li>
					) : (
						<li key={index}><a href={ link }>{ link.charAt(0).toUpperCase() + link.slice(1) }</a></li>
					)
			} else {
				return "";
			}
		})
	}

  render() {
  	const {
  		breadcrumb,
  		title,
  		subtitle
		} = this.props;
    return (
      <section className="content-header">
	      <h1>
	        { title }
	        { subtitle && (<small>Preview page</small>) }  
	      </h1>
	      {
	      	breadcrumb && (
	      		<ol className="breadcrumb">
			        <li><Link to="/"><Icon name="dashboard" /> Home</Link></li>
	      			{ this.renderBreadcrumbs() }
			      </ol>
	      	)
	      }
	    </section>
    );
  }
}

ContentHeader.propTypes = propTypes;
ContentHeader.defaultProps = defaultProps;

export default ContentHeader;