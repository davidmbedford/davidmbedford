import React from 'react';
import './style.css';

import zigZag from '../../images/zigZagcrop.png';
import swfc from '../../images/SWFC.png';
import showspot from '../../images/S.png';
import blitz from '../../images/blitz.png';
import bamazon from '../../images/bamazon.png';
import liveschedule from '../../images/liveschedule.png';
import friend from '../../images/friendfinder.png';
import gifexploder from '../../images/gifexploder.png';


function Portfolio() {
  return (
    <>
      <div className="col s12 l9 no-pad">
        <div className="App">
          <div className="App-header">

            <div className="container">

              <div className="row">
                <div className="col s12">
                  <h3 className="center">Portfolio</h3>
                </div>
              </div>

              <div className="row">
                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={zigZag} />
                      <span class="bard-title">ZigZag</span>
                    </div>
                    <div className="bard-content">
                      <p>Are you looking for a new career path? ZigZag contains a personality survey to help
                        determine the best course for you! We also have a vast database
                          of related academic programs.</p>
                      <br />
                      <p>Main Tech: React, ES6, node.js, Sql, Express, APIs, HTML/CSS (Materialize)</p>
                    </div>
                    <div className="bard-action">
                      <a href="https://github.com/asmith7531/team1project3" target="_blank">Code</a>
                      <a href="https://radiant-wildwood-53087.herokuapp.com" target="_blank">Site</a>
                    </div>
                  </div>
                </div>

                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={swfc} />
                      <span class="bard-title">Star Wars: Force Clicker</span>
                    </div>
                    <div className="bard-content">
                      <p>Test you connection to the force and click on all of the characters without repeating! This app was built to demonstrate dynamic changes with React.JS</p>
                      <br />
                      <p>Main Tech: React, ES6, HTML/CSS (BootStrap)</p>
                    </div>
                    <div className="bard-action">
                      <a href="https://github.com/davidmbedford/clickergame" target="_blank">Code</a>
                      <a href="https://clickergame-rubc.herokuapp.com/" target="_blank">Site</a>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={showspot} />
                      <span class="bard-title">ShowSpotter</span>
                    </div>
                    <div className="bard-content">
                      <p>Enables users to find fun events near them! You can search for concerts, fests and more in your area. Find tickets, and directions via our app, and create a profile to save information.</p>
                      <br />
                      <p>Main Tech: JavaScript, jQuery, various APIs, Firebase, HTML/CSS (Bootstrap)</p>
                    </div>
                    <div className="bard-action">
                      <a href="https://github.com/Parker-Tech/project_one_boiler" target="_blank">Code</a>
                      <a href="https://show-spotter.herokuapp.com/" target="_blank">Site</a>
                    </div>
                  </div>
                </div>

                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={blitz} />
                      <span class="bard-title">Blitzkreig</span>
                    </div>
                    <div className="bard-content">
                      <p>An all-in-one productivity app: Blitz enables you to start your day with a bang, Choose between various widgets, such as traffic reports, weather, and the news, to maximize your morning!</p>
                      <br />
                      <p>Main Tech: JavaScript, node.js, jQuery, Sql, Handlebars, Express, various APIs, HTML/CSS (Bootstrap)</p>
                    </div>
                    <div className="bard-action">
                      <a href="https://github.com/rachaelbelle/blitzkreig" target="_blank">Code</a>
                      <a href="https://blitzkreigg.herokuapp.com/" target="_blank">Site</a>
                    </div>
                  </div>
                </div>

              </div>


              <div className="row">
                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={bamazon} />
                      <span class="bard-title">Bamazon</span>
                    </div>
                    <div className="bard-content">
                      <p>A digital storefront designed for your command line interface! There is a client, and manager-facing interface for this app. Customers may view inventory and purchase items; managers can review, stock and add new items.</p>
                      <br />
                      <p>Main Tech: node.js, jQuery, Inquirer, bash</p>
                    </div>
                    <div className="bard-action">
                      <a href="https://github.com/davidmbedford/bamazon-unit12" target="_blank">Code</a>
                      <a href="#"><span className="card-link">Clone it!</span></a>
                    </div>
                  </div>
                </div>

                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={liveschedule} />
                      <span class="bard-title">Live Schedule</span>
                    </div>
                    <div className="bard-content">
                      <p>This utilizes Firebase to create a live-updating schedule application. This current version is geared towards Train conductors, but the application can be refactored for anyone in need of coordinating a steady routine.</p>
                      <br />
                      <p>Tech: Firebase, JS, jQuery, HTML/CSS (Bootstrap)</p>
                    </div>
                    <div className="bard-action">
                      <a href="https://github.com/davidmbedford/LiveSchedule" target="_blank">Code</a>
                      <a href="https://davidmbedford.github.io/LiveSchedule/" target="_blank">Site</a>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={friend} />
                      <span class="bard-title">Friend Finder</span>
                    </div>
                    <div className="bard-content">
                      <p>This app allows users to take a survey and find like-minded people in their area to hang out with! This app is meant to demonstrate MySql API-routing and Handlebars via node.</p>
                      <br />
                      <p>Main Tech: JS, jQuery, MySql, Handlebars, HTML/CSS (Materialize)</p>
                    </div>
                    <div className="bard-action">
                      <a href="https://github.com/davidmbedford/FriendFinder" target="_blank">Code</a>
                      <a href="https://friend-finderxrubc.herokuapp.com/home" target="_blank">Site</a>
                    </div>
                  </div>
                </div>

                <div className="col s12 l6">
                  <div className="bard">
                    <div className="bard-image">
                      <img src={gifexploder} />
                      <span class="bard-title">Gif Exploder</span>
                    </div>
                    <div className="bard-content">
                      <p>A jQuery-based Gif engine that utilizes the Giphy API. Users can add buttons to the header and use them to search for gifs of any sort based on what's trending.</p>
                      <br />
                      <p>Tech: JavaScript, jQuery, HTML, CSS</p>
                    </div>
                    <div className="bard-action">
                      <a href="https://github.com/davidmbedford/Unit-6-GifTastic" target="_blank">Code</a>
                      <a href="https://davidmbedford.github.io/Unit-6-GifTastic/" target="_blank">Site</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
};

export default Portfolio;