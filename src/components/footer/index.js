import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer >
        <div className="container center">
          <div className="row">
          <a className="grey-text" href="https://docs.google.com/document/d/16ADcaKgLQvL9U5Qq8-KJYXubDxbyXjrrusFbPDU3tuE/edit?usp=sharing">
            <i class="far fa-file" title="resume"></i>
              </a>
          <a className="grey-text" href="https://github.com/davidmbedford"><i class="fab fa-github" title="github"></i></a>
          <a className="grey-text" href="https://www.linkedin.com/in/davidmbedford/"><i class="fab fa-linkedin" title="linkedin"></i></a>
        </div>
        </div>
    </footer>
  )
}

export default Footer;