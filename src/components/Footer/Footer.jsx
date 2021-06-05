import React from 'react' 
import './Footer.css'

export default function Footer(props){
    return(
        <>
        <div className='flexlink'>
            <a href='https://github.com/uwitdat' target='_blank'><div><img id='link' src='gh.png'></img></div></a>
            <a href='https://www.linkedin.com/in/ben-shekhtman-751475178/' target='_blank'><div><img id='link' src='LI-In-Bug.png'></img></div></a>
            <a href='https://www.facebook.com/ben.shekhtman/' target='_blank'><div><img id='link' src='face.png'></img></div></a>         
        </div>
        </>
    )
}