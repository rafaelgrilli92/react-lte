import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class MenuList extends Component {
  render() {
    return (
      <ul className="sidebar-menu">
        <li className="header">MAIN NAVIGATION</li>
        {/* === DASHBOARDS === */}
        <li className="treeview">
          <a href="#"><i className="fa fa-dashboard"></i> <span>Dashboard</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-right pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><Link to="/dashboard/v1"><i className="fa fa-circle-o"></i> <span>Dashboard v1</span></Link></li>
            <li><Link to="/dashboard/v2"><i className="fa fa-circle-o"></i> <span>Dashboard v2</span></Link></li>
          </ul>
        </li>
        {/* === END DASHBOARDS === */}
        <li><IndexLink to="/widgets"><i className="fa fa-th"></i> <span>Widgets</span></IndexLink></li>
      </ul>
    );
  }
}
