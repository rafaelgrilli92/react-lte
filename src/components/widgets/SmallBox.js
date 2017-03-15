import React, { Component, PropTypes } from 'react';

export default class SmallBox extends Component {
  PropTypes = {
    color: PropTypes.string, // aqua (default), green, yellow, red
    icon: PropTypes.string, // just font-awesome name e.g.: envelope-o
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    let { 
      color = 'aqua',
      icon, 
      title, 
      text 
    } = this.props;

    return (
      <div className={"small-box bg-" + color}>
        <div className="inner">
          <h3>{ title }</h3>
          <p>{ text }</p>
        </div>
        {
          icon !== null && (
            <div className="icon">
              <i className={"fa fa-" + icon}></i>
            </div>
          )
        }
        { this.props.children }
      </div>
    );
  }
}

export class SmallBoxFooter extends Component {
  render() {
    return (
      <div className="small-box-footer">
        { this.props.children }
      </div>
    );
  }
}