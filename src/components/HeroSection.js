import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './HeroSection.css';
import './../App.css';


function HeroSection(){
    return (
        <>
            <div className = 'hero-container'>
                <video src = '/video/video-2.mp4' autoPlay muted loop />
                <h1>Welcome to my Intro</h1>
                <p>hello ,my name is yididia and this website is about me  </p>
                <div className = 'hero-btns' >
                    <Button className ='btns' link ='/calculator' buttonStyle ='btn--outline' buttonSize = 'btn--large' >
                        Calculator
                    </Button>
                                        
                    <Button style={{marginLeft: 10 + 'px'}} link ='/about' className ='btns' buttonSize = 'btn--large' >
                        About
                    </Button>
                    
                </div>
            </div>
        
        
        </>
    );
}

export default HeroSection;