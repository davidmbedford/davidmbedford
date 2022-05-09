import React from 'react';
import './style.css';
import Footer from '../../components/footer/index.js';

function Clients() {
    return (
        <>
          <div className="col s12 l9 no-pad">
            <div className="App">
              <div className="App-header">
    
                <div className="container">
    
                  <div className="row">
                    <div className="col s12">
                      <h3 className="center color1">Clients</h3>
                      <p>Below are some examples of my agency work. </p>
                    </div>
                  </div>
    
                  <div className="row">
                    <div className="col s12 l6">
                      <div className="bard">
                        <div className="bard-image">
                          {/* <img src={tc} /> */}
                          <span class="bard-title">Classic Car Value</span>
                        </div>
                        <div className="bard-content">
                          <p>TimeCrunch is a team-focused to-do app...</p>
                          <br />
                          <p><span className="bold">Main Tech:</span> Vue, MySQL, node, Vuetify, ES6, HTML, CSS</p>
                        </div>
                        <div className="bard-action">
                          <a className="btn-flat" href="https://github.com/davidmbedford/TimeCrunch" target="_blank">Code</a>
                          <a className="btn-flat" href="https://time-crunch.herokuapp.com/" target="_blank">Site</a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col s12 l6">
                      <div className="bard">
                        <div className="bard-image">
                          {/* <img src={zigZag} /> */}
                          <span class="bard-title">Thompson Creek</span>
                        </div>
                        <div className="bard-content">
                          <p>ZigZag contains a personality and...</p>
                          <br />
                          <p><span className="bold">Main Tech: </span> WordPress, PHP, ES6, node.js</p>
                        </div>
                        <div className="bard-action">
                          <a className="btn-flat" href="https://github.com/asmith7531/team1project3" target="_blank">Code</a>
                          <a className="btn-flat" href="https://radiant-wildwood-53087.herokuapp.com" target="_blank">Site</a>
                        </div>
                      </div>
                    </div>
    
                  </div>
    
                  <div className="row">
                    <div className="col s12 l6">
                      <div className="bard">
                        <div className="bard-image">
                          {/* <img src={showspot} /> */}
                          <span class="bard-title">American Standard</span>
                        </div>
                        <div className="bard-content">
                          <p>Enables users to find fun events near them! You can search for concerts, fests and more in your area. Find tickets, and directions via our app, and create a profile to save information.</p>
                          <br />
                          <p><span className="bold">Main Tech:</span> Wordpress, PHP, JavaScript, Bootstrap, HTML5, SASS</p>
                          <br />
                        </div>
                        <div className="bard-action">
                          <a className="btn-flat" href="https://github.com/Parker-Tech/project_one_boiler" target="_blank">Code</a>
                          <a className="btn-flat" href="https://show-spotter.herokuapp.com/" target="_blank">Site</a>
                        </div>
                      </div>
                    </div>
    
                    <div className="col s12 l6">
                      <div className="bard">
                        <div className="bard-image">
                          {/* <img src={blitz} /> */}
                          <span class="bard-title">CmySkills</span>
                        </div>
                        <div className="bard-content">
                          <p>An all-in-one productivity app: Blitz enables you to start your day with a bang, Choose between various widgets, such as traffic reports, weather, and the news, to maximize your morning!</p>
                          <br />
                          <p><span className="bold">Main Tech:</span> JavaScript, node.js, jQuery, MySql, Handlebars, Express, APIs, Bootstrap</p>
                        </div>
                        <div className="bard-action">
                          <a className="btn-flat" href="https://github.com/rachaelbelle/blitzkreig" target="_blank">Code</a>
                          <a className="btn-flat" href="https://blitzkreigg.herokuapp.com/" target="_blank">Site</a>
                        </div>
                      </div>
                    </div>
    
                  </div>
    
                </div>
    
                <div className="container">    
                  <Footer />
                </div>
                
              </div>
            </div>
          </div>
    
        </>
  )
};

export default Clients;