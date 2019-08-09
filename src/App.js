import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Menu from './components/Menu';
import Home from './templates/Home';
import Template from './components/Template'

function App() {

	return (
		<Router basename='/'>
			<div className="l-wrap" id="main">
				<div className="l-main">
					<Menu />
					<Route exact path="/" component={Home} />
					<Route path="/:slug" component={Template} />
					<Route path="/home" component={Home} />
					<Route exact path="/" render={() => <Redirect to="/home" />} />
				</div>
			</div>
		</Router>
	);
}

export default App;
