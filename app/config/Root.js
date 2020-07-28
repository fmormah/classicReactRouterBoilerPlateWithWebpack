import "@babel/polyfill";
import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../templates/Header.jsx';
import Footer from '../templates/Footer.jsx';

import App from '../App.jsx';
import Home from '../templates/Home.jsx';
import SuperTemplate from '../templates/SuperTemplate.jsx';

const Root = () => {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={SuperTemplate} />
        <Route exact path="/test" component={App} />
        <Route exact path="/steve" component={Home} />
        {/* <Route component={NoMatch}/> */}
      </Switch>
    </Router>
    
  );
};

export default Root;
