import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I am a web developer with a passion for creating beautiful and functional websites.</p>
      </div>
      <div className="hero-image">
        <img src="piyush.jpg" alt='profile-photo' />
      </div>
    </div>
  );
}

export default Hero;
