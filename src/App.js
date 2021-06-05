import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ResumePage from './pages/ResumePage/ResumePage'
import AboutPage from './pages/AboutPage/AboutPage'


import './App.css';

class App extends Component {
  render() {
    return(

    <div className='app'>
      <Switch>
          <Route path='/home' render={(props) => (
            <LandingPage {...props}/>
          )}/>
          <Route path='/projects' render={(props) => (
            <ProjectsPage {...props}/>
          )}/>  
          <Route path='/resume' render={(props) => (
            <ResumePage {...props}/>
          )}/>  
          <Route path='/about' render={(props) => (
            <AboutPage {...props}/>
          )}/>  
        <Redirect to='/home'/>           
      </Switch>
    </div>

    )
  }
}

export default App;
