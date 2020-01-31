import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/home/index.js';
import Portfolio from './pages/portfolio/index.js';
import Skills from './pages/skills/index.js';
import Contact from './pages/contact/index.js';
import Navigation from './components/navigation/index.js';

function App() {
  return (
    <>
    <Router>
    <Navigation /> 
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/skills' component={Skills}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
