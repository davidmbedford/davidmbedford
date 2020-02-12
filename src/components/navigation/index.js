import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Navigation() {
    return(
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
    )
}

export default Navigation;