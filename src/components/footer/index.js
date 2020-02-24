import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer >
        <div className="container center">
          <div className="row">
          <a className="grey-text" href="https://docs.google.com/document/d/1ozBWzyouy6FgoyrDW90FbzAmbWb-rNfD70IWsBV85-M/edit?usp=sharing">
            <i class="far fa-file"></i>
              </a>
          <a className="grey-text" href="https://github.com/davidmbedford"><i class="fab fa-github"></i></a>
          <a className="grey-text" href="https://www.linkedin.com/in/davidmbedford/"><i class="fab fa-linkedin"></i></a>
        </div>
        </div>
    </footer>
  )
}

export default Footer;