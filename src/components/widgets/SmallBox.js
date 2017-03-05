import React, { Component } from 'react';

export default class SmallBox extends Component {
  PropTypes = {
    color: React.PropTypes.string, // aqua (default), green, yellow, red
    icon: React.PropTypes.string, // just font-awesome name e.g.: envelope-o
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  }

  render() {
    var { 
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
        {
          this.props.children !== null && (
            <div className="small-box-footer">
              { this.props.children }
            </div>
          )
        }
      </div>
    );
  }
}

