import React, { Component } from 'react';
import 'styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Reacts</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="row">
          <div className="col-xs-6">
            <div className="info-box">
              <span className="info-box-icon bg-aqua"><i className="fa fa-envelope-o"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">Messages</span>
                <span className="info-box-number">1,410</span>
              </div>
            </div>
          </div>
          <div className="col-xs-6">
            <button className="btn btn-block btn-danger">Click Here</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
