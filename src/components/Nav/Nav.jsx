import React from 'react' 
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav(props){
  return(
      <>
        <nav className='nav'>
          <Link id='ben'to='/home'>
            <div id='ben'>BEN SHEKHTMAN </div>
          </Link>  
          <div id='slash'>//</div>
          <Link id='a' to='/about'>
            <div id='abt'>about</div>          
          </Link>
          <Link id='a' to='/resume'>
            <div id='rsm'>resume</div>
          </Link>
          <Link id='a' to='/projects'>
            <div id='proj'>projects</div>
          </Link>
        </nav>
      </>
    )
  }