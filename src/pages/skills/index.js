import React from 'react';
import './style.css';

function Skills() {
  return (
    <div className="col s12 l9 no-pad">
      <div className="App">
        <div className="App-header">
          <div class="container skillsBox" >

            <div class="row">
              <div class="col s12">
                <h3 class="center">Skills</h3>
              </div>
            </div>

            <div class="row">
              <div class="col s3">
                <i class="center fab fa-react fa-4x skill-icon no-pad"></i>
                <h6 class="center">React.JS</h6>
              </div>
              <div class="col s3">
                <i class="center fab fa-js fa-4x skill-icon no-pad"></i>
                <h6 class="center">JavaScript</h6>
              </div>
              <div class="col s3">
                <i class="center fab fa-html5 fa-4x skill-icon no-pad"></i>
                <h6 class="center">HTML</h6>
              </div>
              <div class="col s3">
                <i class="center fab fa-css3 fa-4x skill-icon no-pad"></i>
                <h6 class="center">CSS</h6>
              </div>
              <div class="col s3">
                <i class="center fas fa-dollar-sign fa-4x skill-icon"></i>
                <h6 class="center">jQuery</h6>
              </div>
              <div class="col s3">
                <i class="center fab fa-node fa-js fa-4x skill-icon no-pad"></i>
                <h6 class="center">node.js</h6>
              </div>
              <div class="col s3">
                <i class="center fas fa-database fa-4x skill-icon"></i>
                <h6 class="center">MySQL</h6>
              </div>
              <div class="col s3">
                <i class="center fas fa-leaf fa-4x skill-icon"></i>
                <h6 class="center">MongoDB</h6>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Skills;

