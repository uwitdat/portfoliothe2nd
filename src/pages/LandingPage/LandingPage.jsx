import React, { Component } from 'react';
import './LandingPage.css'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default class LandingPage extends Component{
  render() {
    return (
      <>
        <Nav />
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
              <Link to='/resume'>
                  <button id='btn'>RESUME</button>
              </Link>
              <Link to='/projects'>
                  <button id='btn'>PROJECTS</button>
              </Link>
            </div>
          </div>
        </div>
      <Footer />
      </>
    )
  }
}