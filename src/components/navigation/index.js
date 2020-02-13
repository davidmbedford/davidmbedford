import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Navigation extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.sidenav');
          var instances = M.Sidenav.init(elems, {});
        });
        }

    render () {
        return(
            <>
            <div className="col s12 l3 no-pad">

            <nav>
                <div className="nav-wrapper">
                    <a href="https://www.linkedin.com/in/david-bedford-027b99190/" className="brand-logo">dmb</a>
                    <a data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <div className="container">
                        <ul class="right hide-on-med-and-down">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            <li><Link to='/skills'>Skills</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div> 
                </div>
            </nav>

            <ul className="sidenav" id="slide-out">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            
            </div>
            </>
            )
    }
}

export default Navigation;