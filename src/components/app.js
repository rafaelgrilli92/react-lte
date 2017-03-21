import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import 'styles/App.css';

import Avatar from 'images/avatar.png';

import Icon from 'components/popular/icon';
import Navbar from 'components/layout/Navbar';
import SideBar, { SideBarMenu, SideBarSubMenu, SideBarItem } from 'components/layout/SideBar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SideBar>
          <div className="user-panel">
            <div className="pull-left image">
              <img src={Avatar} className="img-circle" alt="User"/>
            </div>
            <div className="pull-left info">
              <p>Rafael Grilli</p>
              <a>
                <i className="fa fa-circle text-success"></i> Online
              </a>
            </div>
          </div>
          <SideBarMenu title="MAIN NAVIGATION">
            {/* === DASHBOARDS === */}
            <SideBarSubMenu icon="dashboard" text="Dashboard">
              <SideBarItem><Link to="/dashboard/v1"><Icon name="circle-o"/> <span>Dashboard v1</span></Link></SideBarItem>
              <SideBarItem><Link to="/dashboard/v2"><Icon name="circle-o"/> <span>Dashboard v2</span></Link></SideBarItem>
            </SideBarSubMenu>
            {/* === END DASHBOARDS === */}
            <SideBarItem><IndexLink to="/widgets"><Icon name="th" fixedWidth={true}/> <span>Widgets</span></IndexLink></SideBarItem>
          </SideBarMenu>
        </SideBar>
        <div className="content-wrapper">
    		    {this.props.children}
    		</div>	
      </div>
    );
  }
}

export default App;
