import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Navigation() {
    return(
        <>
        <nav id="transparent">
        <div className="nav-wrapper">
          <a href="https://www.linkedin.com/in/david-bedford-027b99190/" className="brand-logo">dmb</a>
          <a data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/skills'>Skills</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
        
        <div className="col s12 l3">
            <h1>This is the Navigation zone</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <ul id="slide-out" className="sidenav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>

</>
    )
}

export default Navigation;