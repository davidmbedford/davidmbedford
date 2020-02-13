import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="page-footer" id="footertop">
      <div className="footer-copyright" id="footerbottom">
        <div className="container">
          this site designed by <span><a href="https://davidmbedford.github.io">davidmbedford</a></span>
          <a className="grey-text right" href="https://docs.google.com/document/d/1ozBWzyouy6FgoyrDW90FbzAmbWb-rNfD70IWsBV85-M/edit?usp=sharing">
            <i class="far fa-file"></i>
              </a>
          <a className="grey-text right" href="https://github.com/davidmbedford"><i class="fab fa-github"></i></a>
          <a className="grey-text right" href="https://www.linkedin.com/in/davidmbedford/"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;