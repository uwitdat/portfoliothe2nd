import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import ProjectsPage from './pages/ProjectsPage'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'

import './App.css';

class App extends Component {
  render() {
    return(

    <div className='app'>
        <Nav />
        <LandingPage/>
        <Footer/>            
      </div>

    )
  }
}

export default App;
