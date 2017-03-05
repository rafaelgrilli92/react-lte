import React, { Component } from 'react';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';

// Main Component
import App from 'components/App';

// Views
import Home from 'components/views/Home';
//import Dashboard1 from 'components/views/Dashboard1';
import Widgets from 'components/views/Widgets';

class Routes extends Component {
	render() {
		return (
			<Router history={ browserHistory }>
				<Route path='/' component={ App }>
					<IndexRoute component={ Home }/>
					<Route  path='widgets' component={ Widgets }/>
				</Route>
			</Router>
		)
	}
}

export default Routes;