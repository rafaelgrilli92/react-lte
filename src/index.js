import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';

// Redux
//import configureStore from 'store/configureStore'

// All Scripts and Styles
import 'containers/Scripts'

// Routes
import Routes from 'containers/Routes'

//var store = configureStore();


ReactDOM.render(
	<Routes />,
  document.getElementById('root')
);
