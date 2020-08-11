import React from 'react';

import HeroContent from './layout/HeroContent';

import heroBg from '../images/hero-bg.jpg';
import heroBgMobile from '../images/hero-bg-mobile.jpg'

const bgStyles= {
  backgroundImage:`url(${heroBg})`,
  backgroundSize:"cover",
  backgroundPosition:"center", 
  color:"white",
  height:"100vh"
}

const bgStylesMobile = {
  backgroundImage: `url(${heroBgMobile})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  height: "100vh"
}

const Hero = () => {
  return (
    <>
      <div 
        className="row justify-content-center"
        id="home"
      >
        <div 
          style={bgStyles} 
          className="col d-none d-md-block text-center"
        >
          <HeroContent />
        </div>
        <div 
          style={bgStylesMobile} 
          className="col d-block d-md-none text-center"
        >
          <HeroContent />
        </div>
      </div>
    </>
  )
};

export default Hero;