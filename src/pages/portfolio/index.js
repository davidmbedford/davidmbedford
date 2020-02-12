import React from 'react';
import './style.css';

function Portfolio() {
    return(
        <>
            <div className="section" id="projects-box">
                <div className="container" id="portfolio-sec">

                    <div className="row">
                        <div className="col s12">
                            <h3 className="center">Portfolio</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 l6">
                            <h5 className="header">ZigZag</h5>
                                <div className="card">
                                    <div className="card-image">
                                        {/* <img src="assets/images/zigZagcrop.png"> */}
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                        <p>Are you looking for a new career path? ZigZag contains a personality survey to help 
                                            determine the best course for you! We also have a vast database 
                                            of related academic programs.</p>
                                        <br/>
                                        <p>Main Tech: React, ES6, node.js, Sql, Express, APIs, HTML/CSS (Materialize)</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/asmith7531/team1project3"><span className="card-link">Code</span></a>
                  <a href="https://radiant-wildwood-53087.herokuapp.com"><span className="card-link">Site</span></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 l6">
            <h5 className="header">Star Wars: Force Clicker</h5>
            <div className="card">
              <div className="card-image">
                {/* <img src="assets/images/SWFC.png"> */}
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>Test you connection to the force and click on all of the characters without repeating! This app was built to demonstrate dynamic changes with React.JS</p>
                  <br/>
                  <p>Main Tech: React, ES6, HTML/CSS (BootStrap)</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/davidmbedford/clickergame"><span className="card-link">Code</span></a>
                  <a href="https://clickergame-rubc.herokuapp.com/"><span className="card-link">Site</span></a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col s12 l6">
            <h5 className="header">ShowSpotter</h5>
            <div className="card ">
              <div className="card-image">
                {/* <img src="assets/images/S.png"> */}
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>Enables users to find fun events near them! You can search for concerts, fests and more in your area. Find tickets, and directions via our app, and create a profile to save information.</p>
                  <br/>
                  <p>Main Tech: JavaScript, jQuery, various APIs, Firebase, HTML/CSS (Bootstrap)</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/Parker-Tech/project_one_boiler"><span className="card-link">Code</span></a>
                  <a href="https://show-spotter.herokuapp.com/"><span className="card-link">Site</span></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 l6">
            <h5 className="header">Blitzkrieg</h5>
            <div className="card">
              <div className="card-image">
                {/* <img src="assets/images/blitz.png"> */}
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>An all-in-one productivity app: Blitz enables you to start your day with a bang, Choose between various widgets, such as traffic reports, weather, and the news, to maximize your morning!</p>
                  <br/>
                  <p>Main Tech: JavaScript, node.js, jQuery, Sql, Handlebars, Express, various APIs, HTML/CSS (Bootstrap)</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/rachaelbelle/blitzkreig"><span className="card-link">Code</span></a>
                  <a href="https://blitzkreigg.herokuapp.com/"><span className="card-link">Site</span></a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col s12 l6">
            <h5 className="header">Bamazon</h5>
            <div className="card ">
              <div className="card-image">
                {/* <img src="assets/images/bamazon.png"> */}
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>A digital storefront designed for your command line interface! There is a client, and manager-facing interface for this app. Customers may view inventory and purchase items; managers can review, stock and add new items.</p>
                  <br/>
                  <p>Main Tech: node.js, jQuery, Inquirer, bash</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/davidmbedford/bamazon-unit12"><span className="card-link">Code</span></a>
                  <a href="#"><span className="card-link">Clone it!</span></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 l6">
            <h5 className="header">Live Schedule</h5>
            <div className="card ">
              <div className="card-image">
                {/* <img src="assets/images/liveschedule.png"> */}
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>This utilizes Firebase to create a live-updating schedule application. This current version is geared towards Train conductors, but the application can be refactored for anyone in need of coordinating a steady routine.</p>
                  <br/>
                  <p>Tech: Firebase, JS, jQuery, HTML/CSS (Bootstrap)</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/davidmbedford/LiveSchedule"><span className="card-link">Code</span></a>
                  <a href="https://davidmbedford.github.io/LiveSchedule/"><span className="card-link">Site</span></a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col s12 l6">
            <h5 className="header">Friend Finder</h5>
            <div className="card ">
              <div className="card-image">
                {/* <img src="assets/images/friendfinder.png"> */}
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>This app allows users to take a survey and find like-minded people in their area to hang out with! This app is meant to demonstrate MySql API-routing and Handlebars via node.</p>
                  <br/>
                  <p>Main Tech: JS, jQuery, MySql, Handlebars, HTML/CSS (Materialize)</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/davidmbedford/FriendFinder"><span className="card-link">Code</span></a>
                  <a href="https://friend-finderxrubc.herokuapp.com/home"><span className="card-link">Site</span></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 l6">
            <h5 className="header">Gif Exploder</h5>
            <div className="card ">
              <div className="card-image">
                {/* <img src="assets/images/gifexploder.png"> */}
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>A jQuery-based Gif engine that utilizes the Giphy API. Users can add buttons to the header and use them to search for gifs of any sort based on what's trending.</p>
                  <br/>
                  <p>Tech: JavaScript, jQuery, HTML, CSS</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/davidmbedford/Unit-6-GifTastic"><span className="card-link">Code</span></a>
                  <a href="https://davidmbedford.github.io/Unit-6-GifTastic/"><span className="card-link">Site</span></a>
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