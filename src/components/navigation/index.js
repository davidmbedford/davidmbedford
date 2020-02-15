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

            <div>
                <div className="nav-wrapper">
                    <h2 className="right-align">
                    <a href="https://www.linkedin.com/in/david-bedford-027b99190/">david michael bedford</a>
                    </h2>
                    <a data-target="slide-out" className="sidenav-trigger hide-on-med-and-up"><i className="material-icons">menu</i></a>
                    <div className="nav-links">
                        <ul class="right-align hide-on-med-and-down">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            <li><Link to='/skills'>Skills</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div> 
                </div>
            </div>

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