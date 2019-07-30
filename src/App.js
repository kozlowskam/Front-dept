import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Menu from './components/Menu';
import Footer from './partials/Footer';
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
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
