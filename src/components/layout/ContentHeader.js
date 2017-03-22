import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Icon from 'components/uiElements/Icon';

export default class ContentHeader extends Component {
	PropTypes = {
		breadcrumb: PropTypes.bool, 
		subtitle: PropTypes.string,
		title: PropTypes.string.isRequired
	}
	
	renderBreadcrumbs() {
		var breadcrumbs = window.location.pathname.split('/').slice(1);
		return breadcrumbs.map((link, index) => {
			if (link !== "") {
				if (index === breadcrumbs.length - 1)
					return (<li key={index} className="active">{ link.charAt(0).toUpperCase() + link.slice(1) }</li>);
				else
					return ( <li key={index}><Link to={ link }>{ link.charAt(0).toUpperCase() + link.slice(1) }</Link></li>);
			} else {
				return "";
			}
		})
	}

  render() {
  	var {
  		breadcrumb = true,
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