import React, {Component} from 'react' 
import './ProjectsPage.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default class ProjectsPage extends Component{
    render() {
        return (
            <>  
            <Nav />
            <div className='txt'>
                <div className='img-contain'>
                    <h1 id='ben'>PLAY DOG</h1>
                    <p id='lan'>// ABOUT</p>                     
                    <p>PLAYDOG is a mobile platform for owners to find/host play dates for their dogs.
                    Features include an easy to use map functionality, coupled with a fun and interactive user interface.</p>
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
                        <img id='playdog' src='playdog3.png'></img>
                    </div>
                </div>
                <Footer />

            </>
        )
    }
}