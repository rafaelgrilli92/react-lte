import React, { Component, PropTypes } from 'react';

import Icon from 'components/popular/icon';

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar">
          <section className="sidebar">
            { this.props.children }
          </section>
        </aside>
      </div>
    );
  }
}

export class SideBarMenu extends Component {
  PropTypes = {
    title: PropTypes.string
  }

  render() {
    let { title } = this.props;

    return (
      <ul className="sidebar-menu">
        { title ? (<li className="header">{ title }</li>) : ""}
        { this.props.children }
      </ul>
    );
  }
}

export class SideBarSubMenu extends Component {
  PropTypes = {
    icon: PropTypes.string,
    path: PropTypes.string.isRequired,
    text: PropTypes.string 
  }

  render() {
    var { icon, text } = this.props;

    return (
       <li className="treeview">
        <a href="#">
            { icon ? (<Icon name={icon} fixedWidth={true} />) : "" }&nbsp;<span>{ text }</span>
          <span className="pull-right-container">
            <Icon name="angle-right" pull="right" />
          </span>
        </a>
        <ul className="treeview-menu">
          { this.props.children }
        </ul>
      </li>
    );
  }
}


export class SideBarItem extends Component {
  render() {
    return (
        <li>{ this.props.children }</li>
    );
  }
}

export class SideBarLink extends Component {
  PropTypes = {
    icon: PropTypes.string,
    path: PropTypes.string.isRequired,
    text: PropTypes.string 
  }

  render() {
    var { icon, path, text } = this.props;

    var renderLinkContent = () => {
      return (
        <span> 
          { icon ? (<Icon name={icon} fixedWidth={true} />) : "" }&nbsp;{ text }
        </span>
      )
    }

    return (
      <a href={path}>{ renderLinkContent() }</a>
    );
  }
}
