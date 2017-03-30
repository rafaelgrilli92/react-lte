import React, { Component, PropTypes } from 'react';

import { Icon } from '../';

const SideBar = ({children}) => {
    return (
      <div>
        <aside className="main-sidebar">
          <section className="sidebar">
            { children }
          </section>
        </aside>
      </div>
    );
}

const SideBarMenu = ({ children, title }) => {
    return (
      <ul className="sidebar-menu">
        { title ? (<li className="header">{ title }</li>) : ""}
        { children }
      </ul>
    );
}

SideBarMenu.propTypes = {
  title: PropTypes.string
};

const SideBarSubMenu = ({ children, icon, text, items }) => {
    return (
       <li className="treeview">
        <a href="#">
          { icon ? (<Icon name={icon} fixedWidth={true} />) : "" }&nbsp;
          <span>{ text }</span>
          <span className="pull-right-container">
            <Icon name="angle-right" pull="right" />
          </span>
        </a>
        <ul className="treeview-menu">
          { children }
        </ul>
      </li>
    );
}

SideBarSubMenu.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired
};

const SideBarItem = ({children}) => <li>{ children }</li>;

const SideBarLink = ({ icon, path, text }) => {
  return (
    <a href={path || "#"}>
      <span> 
        { icon ? (<Icon name={icon} fixedWidth={true} />) : "" }&nbsp;{ text }
      </span>
    </a>
  )
}

SideBarLink.propTypes = {
  icon: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string 
}

export { SideBar as default, SideBarMenu, SideBarSubMenu, SideBarItem, SideBarLink };