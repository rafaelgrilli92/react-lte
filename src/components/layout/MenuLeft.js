import React, { Component } from 'react';

// Images
import avatar from 'images/avatar.png';

// Components
import MenuLeftList from 'components/layout/MenuLeftList';

export default class MenuLeft extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar">
          <section className="sidebar">
            <div className="user-panel">
              <div className="pull-left image">
                <img src={avatar} className="img-circle" alt="User"/>
              </div>
              <div className="pull-left info">
                <p>Rafael Grilli</p>
                <a>
                  <i className="fa fa-circle text-success"></i> Online
                </a>
              </div>
            </div>
            <MenuLeftList />
          </section>
        </aside>
      </div>
    );
  }
}