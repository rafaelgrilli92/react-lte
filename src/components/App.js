import React, { Component } from 'react';
import 'styles/App.css';

// Components
import MenuLeft from 'components/layout/MenuLeft';
import Navbar from 'components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MenuLeft />
        <div className="content-wrapper">
    		    {this.props.children}
    		</div>	
      </div>
    );
  }
}

export default App;
