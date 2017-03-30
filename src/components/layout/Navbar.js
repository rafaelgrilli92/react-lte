import React, { Component } from 'react';
import { Link } from 'react-router';

// Images
import avatar from '../../images/avatar.png';


export default class Navbar extends Component {
  render() {
    return (
        <div>
          <header className="main-header">
            <Link to="/" className="logo">
                <span className="logo-mini"><b>R</b>LT</span>
                <span className="logo-lg"><b>React Admin</b>LTE</span>
            </Link>
            <nav className="navbar navbar-static-top" role="navigation">
                <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                      <li className="dropdown messages-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="fa fa-envelope-o"></i>
                          <span className="label label-success">4</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="header">You have 4 messages</li>
                          <li>
                            <ul className="menu">
                              <li>
                                <a href="#">
                                  <div className="pull-left">
                                    <img src="img/user2-160x160.jpg" className="img-circle" alt="User"/>
                                  </div>
                                  <h4>
                                    Sender Name
                                    <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                  </h4>
                                  <p>Message Excerpt</p>
                                </a>
                              </li>
                              ...
                            </ul>
                          </li>
                          <li className="footer"><a href="#">See All Messages</a></li>
                        </ul>
                      </li>
                      <li className="dropdown notifications-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="fa fa-bell-o"></i>
                          <span className="label label-danger">10</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="header">You have 10 notifications</li>
                          <li>
                            <ul className="menu">
                              <li>
                                <a href="#">
                                  <i className="ion ion-ios-people info"></i> Notification title
                                </a>
                              </li>
                              ...
                            </ul>
                          </li>
                          <li className="footer"><a href="#">View all</a></li>
                        </ul>
                      </li>
                      <li className="dropdown tasks-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="fa fa-flag-o"></i>
                          <span className="label label-danger">9</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="header">You have 9 tasks</li>
                          <li>
                            <ul className="menu">
                              <li>
                                <a href="#">
                                  <h3>
                                    Design some buttons
                                    <small className="pull-right">20%</small>
                                  </h3>
                                  <div className="progress xs">
                                    <div className="progress-bar progress-bar-aqua" style={{'width': '20%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">20% Complete</span>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              ...
                            </ul>
                          </li>
                          <li className="footer">
                            <a href="#">View all tasks</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown user user-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <img src={avatar} className="user-image" alt="User"/>
                          <span className="hidden-xs">Rafael Grilli</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="user-header">
                            <img src={avatar} className="img-circle" alt="User"/>
                            <p>
                              <b>Rafael Grilli</b><br/> 
                              Programmer
                            </p>
                          </li>
                          <li className="user-body">
                            <div className="col-xs-4 text-center">
                              <a href="#">Followers</a>
                            </div>
                            <div className="col-xs-4 text-center">
                              <a href="#">Sales</a>
                            </div>
                            <div className="col-xs-4 text-center">
                                <a href="#">Friends</a>
                            </div>
                          </li>
                          <li className="user-footer">
                            <div className="pull-left">
                             <Link to="/user/profile" className="btn btn-primary btn-flat">My Profile</Link>
                            </div>
                            <div className="pull-right">
                                <a href="#" className="btn btn-danger btn-flat">Sign out</a>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                </div>
            </nav>
          </header>
        </div>
    );
  }
}