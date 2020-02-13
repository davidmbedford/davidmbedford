import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="page-footer" id="footertop">
      <div className="footer-copyright" id="footerbottom">
        <div className="container">
          this site designed by <span><a href="https://davidmbedford.github.io">davidmbedford</a></span>
          <a className="grey-text right" href="https://www.instagram.com/littlunmusic/?hl=en"><i className="fab fa-instagram fa-lg"></i></a>
          <a className="grey-text right" href="https://twitter.com/littlunmusic"><i className="fab fa-twitter fa-lg"></i></a>
          <a className="grey-text right" href="https://www.facebook.com/littlunmusic/"><i className="fab fa-facebook fa-lg"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;