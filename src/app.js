import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import { Navbar, SideBar, SideBarMenu, SideBarSubMenu, SideBarItem, Icon } from './components/';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SideBar>
          <div className="user-panel">
            <div className="pull-left image">
              <img src="avatar.png" className="img-circle" alt="User"/>
            </div>
            <div className="pull-left info">
              <p>Rafael Grilli</p>
              <a>
                <i className="fa fa-circle text-success"></i> Online
              </a>
            </div>
          </div>
          <SideBarMenu title="MAIN NAVIGATION">
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
