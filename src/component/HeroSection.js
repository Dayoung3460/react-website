import React from 'react';
import './HeroSection.css'
import Button from "./Button";

const HeroSection = (props) => {
  return (
    <div className='hero-container'>
      <video src='/video/video-2.mp4' autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;
