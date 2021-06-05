import React from 'react' 
import './Nav.css'

export default function Nav(props){
    return(
        <>
        <video src='myVid.mp4' loop="true" autoplay="autoplay" muted ></video>
        <nav className='nav'>
          <div id='ben'>BEN SHEKHTMAN </div>
          <div id='slash'>//</div>
          <div id='abt'>about</div>
          <div id='rsm'>resume</div>
          <div id='proj'>projects</div>
        </nav>
        </>
    )
}