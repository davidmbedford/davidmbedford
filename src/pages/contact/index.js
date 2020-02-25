import React from 'react';
import './style.css';
import Footer from '../../components/footer/index.js';

function Contact() {
  return (
    <div className="col s12 l9 no-pad">
      <div className="App">
        <div className="App-header">

          <div class="container backBox left-align">
            <div class="row">
              <div class="col s12">
                <h3 class="center">Contact</h3>
                <h5>Email: <span class="contact-info">david.m.bedford1@gmail.com</span></h5>
                <h5>Phone: <span class="contact-info">848.391.9915</span></h5>
                <h5>Github: <a href="https://github.com/davidmbedford/">davidmbedford</a></h5>
                <h5>LinkedIn: <a href="https://www.linkedin.com/in/david-bedford-027b99190/">link</a></h5>
                <h5>More about me:
                  <a href="https://drive.google.com/open?id=1ozBWzyouy6FgoyrDW90FbzAmbWb-rNfD70IWsBV85-M"> resume</a></h5>
              </div>
            </div>
          </div>

          <div className="container">    
            <Footer />
          </div>

        </div>
      </div>
    </div>
  )
};

export default Contact;