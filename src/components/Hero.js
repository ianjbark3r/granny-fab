import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import heroBg from '../images/hero-bg.jpg';

const bgStyles= {
  backgroundImage:`url(${heroBg})`,
  backgroundSize:"cover",
  backgroundPosition:"center", 
  color:"white",
  height:"100vh"
}

const largeTitleStyles = { 
  fontFamily:"Helvetica Neue", 
  fontSize:"14vw", 
  fontWeight:"600", 
  paddingTop:"calc(8vh + 8vw)",
  textShadow:"0px 2px 4px #000" 
}

const smallTitleStyles = { 
  fontFamily:"Helvetica Neue", 
  fontSize:"6rem", 
  fontWeight:"600", 
  paddingTop:"14vh",
  textShadow:"0px 2px 4px #000" 
}

const subtitleStyles = { 
  fontFamily:"Helvetica Neue", 
  fontSize:"2.2rem",
  lineHeight:"2.5rem", 
  marginTop:"2.5vh",
  textShadow:"0px 2px 3px #000" 
}

const buttonStyles = {
  backgroundColor:"#FFF",
  border:"1px solid",
  fontSize:"1.2rem",
  height:"2.4rem",
  marginTop:"7vh",
  width:"10rem"
}

const Hero = () => {
  return (
    <>
      <div style={bgStyles} className="row justify-content-center">
        <div className="col-sm-10 text-center">
          <h1 style={largeTitleStyles} className="display-1 d-none d-lg-block">
            Granny Fab
          </h1>
          <h1 style={smallTitleStyles} className="display-1 d-block d-lg-none">
            Granny Fab
          </h1>         
          <p style={subtitleStyles}
          >
            <strong>
              <span style={{ display:"block" }}>For when your</span>
              <span style={{ display:"block" }}>favorite color is sparkle</span>
            </strong>
          </p>      
          <button style={buttonStyles} className="mr-2">shop</button>
          <AnchorLink href="#glasses">
            <button style={buttonStyles}>learn more</button>
          </AnchorLink>
        </div>
      </div>
    </>
  )
};

export default Hero;