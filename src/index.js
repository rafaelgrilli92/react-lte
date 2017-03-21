import React from 'react';
import ReactDOM from 'react-dom';

// All Scripts and Styles
import 'containers/scripts'

// Routes
import Routes from 'containers/routes'

//var store = configureStore();


ReactDOM.render(
	<Routes />,
  document.getElementById('root')
);
