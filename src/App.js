import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/home/index.js';
import Portfolio from './pages/portfolio/index.js';
import Skills from './pages/skills/index.js';
import Contact from './pages/contact/index.js';


function App() {
  return (
    <>
    <Home/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    </>
  );
}

export default App;
