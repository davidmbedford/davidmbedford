import React from 'react';
import './style.css';

function Contact() {
  return (
    <div className="col s12 l9 no-pad">
      <div className="App">
        <div className="App-header">

          <div class="container backBox left-align">
            <div class="row">
              <div class="col s12">
                <h3 class="center">Contact</h3>
                <h6><strong>Email:</strong> <span class="contact-info">david.m.bedford1@gmail.com</span></h6>
                <h6><strong>Phone:</strong> <span class="contact-info">848.391.9915</span></h6>
                <h6><strong>Github:</strong> <a href="https://github.com/davidmbedford/">davidmbedford</a></h6>
                <h6><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/david-bedford-027b99190/">link</a></h6>
                <h6><strong>More about me:</strong>
                  <a href="https://drive.google.com/open?id=1ozBWzyouy6FgoyrDW90FbzAmbWb-rNfD70IWsBV85-M">resume</a></h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default Contact;