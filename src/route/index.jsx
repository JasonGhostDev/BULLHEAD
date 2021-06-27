import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Recovery from '../pages/Recovery';
import Navbar from '../components/Navbar';
class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/recovery' component={Recovery} />
        </Switch>
    
      </Router>
    );
  }
}

export default Routes;
