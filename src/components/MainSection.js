import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';


function MainSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/football.mp4' autoPlay loop muted/>
      <h1>Come Let's Football</h1>
      <p>History begins here!</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          WATCH FOOTBALL MATCH <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  );
}

export default MainSection;