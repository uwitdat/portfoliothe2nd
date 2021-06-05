import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return(

    <div className='app'>
      <video src='myVid.mp4' loop="true" autoplay="autoplay" muted ></video>
      <nav className='nav'>
        <div id='ben'>BEN SHEKHTMAN </div>
        <div id='slash'>//</div>
        <div id='abt'>about</div>
        <div id='rsm'>resume</div>
        <div id='proj'>projects</div>
      </nav>
      <div className='txt'>
        <div className='col'>
          <h2>FULL STACK WEB DEVELOPER</h2>
          <p id='top'>creative, forward thinking, inspired</p>
          <p id='top'>With a passion for <span>UI/UX</span></p><br/>
          
          <p id='lan'>// LANGUAGES</p>
          <hr/>
          <p>JAVASCRIPT, PYTHON, RUBY</p>
          <p> HTML, CSS, SASS</p>
          
          
          <p id='lan'>// FRAMEWORKS</p>
          <hr/>
          <p>REACT, EXPRESS, NODE, DJANGO</p>
          <p>RUBY ON RAILS, BOOTSTRAP, MATERIALIZE</p>
          <p id='lan'>// DATABASES</p>
          <hr/>
          <p>MONGODB, PSQL, SQLITE</p>
          <p id='lan'>// DEV-OPS</p>
          <hr/>
          <p>GITHUB, AWS, HEROKU</p>
        </div>
        <div className='col-2'>
          <div className='buttons'>
            <button id='btn'>RESUME</button>
            <button id='btn'>PROJECTS</button>
          </div>
        </div>
      </div>
        <div className='flexlink'>
          <a href='https://github.com/uwitdat' target='_blank'><div><img id='link' src='gh.png'></img></div></a>
          <a href='https://www.linkedin.com/in/ben-shekhtman-751475178/' target='_blank'><div><img id='link' src='LI-In-Bug.png'></img></div></a>
          <a href='https://www.facebook.com/ben.shekhtman/' target='_blank'><div><img id='link' src='face.png'></img></div></a>         
        </div>             
      </div>

    )
  }
}

export default App;
