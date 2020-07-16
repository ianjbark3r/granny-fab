import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../../gfab-logo.png';

const largeTitleStyles = {
  fontFamily: "Helvetica Neue, Arial, sans-serif",
  fontSize: "14vw",
  fontWeight: "600",
  paddingTop: "8vh",
  textShadow: "0px 2px 4px #000"
}

const logoStylesDesktop = {
  paddingTop: "12vh",
  maxWidth: "85vw"
}

const logoStylesMobile = {
  paddingTop: "15vh",
  maxWidth: "90vw"
}

const smallTitleStyles = {
  fontFamily: "Helvetica Neue, Arial, sans-serif",
  fontSize: "6rem",
  fontWeight: "600",
  paddingTop: "14vh",
  textShadow: "0px 2px 4px #000"
}

const subtitleStylesDesktop = {
  fontFamily: "Helvetica Neue, Arial, sans-serif",
  fontSize: "2rem",
  lineHeight: "2.5rem",
  marginTop: "-10vw",
  textShadow: "0px 2px 3px #000"
}

const subtitleStylesMobile = {
  fontFamily: "Helvetica Neue, Arial, sans-serif",
  fontSize: "1.5rem",
  lineHeight: "2rem",
  marginTop: "2.5vh",
  textShadow: "0px 2px 3px #000"
}

const buttonStyles = {
  backgroundColor: "#FFF",
  border: "1px solid",
  fontSize: "1.2rem",
  height: "2.4rem",
  marginTop: "7vh",
  width: "10rem"
}

const HeroContent = () => {
  return (
    <>
      <h1 style={largeTitleStyles} className="display-1 d-none d-lg-block">
        <img style={logoStylesDesktop} src={logo} alt="Granny Fab Accoutrements" />
      </h1>
      <h1 style={smallTitleStyles} className="display-1 d-block d-lg-none">
        <img style={logoStylesMobile} src={logo} alt="Granny Fab Accoutrements" />
      </h1>
      <p style={subtitleStylesDesktop} className="d-none d-lg-block">
        <span style={{ display: "block" }}>For when your</span>
        <span style={{ display: "block" }}>favorite color is sparkle</span>
      </p>
      <p style={subtitleStylesMobile} className="d-block d-lg-none">
        <span style={{ display: "block" }}>For when your</span>
        <span style={{ display: "block" }}>favorite color is sparkle</span>
      </p>
      <a href="https://www.depop.com/grannyfab/">
        <button style={buttonStyles} className="mr-2">shop</button>
      </a>
      <AnchorLink href="#glasses">
        <button style={buttonStyles}>learn more</button>
      </AnchorLink>
    </>
  )
};

export default HeroContent;