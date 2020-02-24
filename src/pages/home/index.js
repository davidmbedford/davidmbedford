import React from 'react';
import './style.css';
import Footer from '../../components/footer/index.js';

function Home() {
    return(
        <div className="col s12 l9 no-pad">
        <div className="App">
            <div className="App-header">
                <div className="container left-align">
                    <h3>Hi!</h3>
                    <h3>I'm a Full-Stack Developer with a current focus on React and UI/UX design</h3>
                    <h5>But I'm familiar with the full design process! Check out my work</h5>
                    <h5>I'm also a project manager, musician, community activist, and avid learner</h5>
                </div>    
            <div className="container">    
            <Footer />
            </div>
            </div>
        </div>
        </div>
    )
};

export default Home;