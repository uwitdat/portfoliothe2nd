import React, { useState } from 'react' 
import './ProjectsPage.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { SliderData } from '../../components/SliderData'
import {FaArrowAltCircleRight} from 'react-icons/fa'


const ProjectsPage = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    console.log(current);

    return (
        <>  
        <Nav />
        <div className='txt'>
            <div className='img-contain'>
                <h1 id='ben'>PLAY DOG</h1>
                <p id='lan'>// ABOUT</p>                     
                <p>PLAYDOG is a mobile platform for owners to find/host play dates for their dogs.
                Features include an easy to use map functionality, coupled with a fun and interactive user interface.</p>
                <p id='lan'>// BUILT WITH</p>                     
                <p>Python3, Django3, Leaflet.JS</p>
                <p>Esri Leaflet, AWS S3, Javascript</p>
                <p>JQuery, HTML 5.0, CSS3</p>
                <p id='lan'>// LINKS</p> 
                
                <div className='pic-txt-div'>
                    <div className='pic-link'><a href='https://github.com/uwitdat/playdog-project3' target='_blank'><img id='link-2' src='gh.png'/></a></div>
                    <div className='p-link'><p id='p-2'>GitHub</p></div> 
                </div>
                <div className='pic-txt-div'>
                    <div className='pic-link'><a href='https://playdog-playdate.herokuapp.com' target='_blank'><img id='link-2' src='heroku-icon.png'/></a></div>
                    <div className='p-link'><p id='p-2'>Heroku</p></div> 
                </div>                   
            </div>
            <div className='col-2-pics'>
            <FaArrowAltCircleRight className='right-arr' onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return  (
                    <div className={index === current ? 'slide active' : 'slide'} 
                        key = {index}
                        >
                        {index === current && (<img id='playdog' src={slide.image}></img> )}    
                    </div>
                  )          
                })}  
                </div>
        </div>
        <Footer />
        </>
    )
}

export default ProjectsPage;