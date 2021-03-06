import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { sections } from '../../layout/Sections';

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
  paddingTop: "10vh",
  maxWidth: "90vw"
}

const darkScrollArrowStyles = {
  position: "absolute",
  bottom: "4vh",
  left: "50%",
  width: "24px",
  height: "24px",
  marginLeft: "-12px",
  borderLeft: "4px solid #fff",
  borderBottom: "4px solid #fff",
  WebkitTransform: "rotate(-45deg)",
  transform: "rotate(-45deg)",
  boxSizing: "border-box"
}

const smallTitleStyles = {
  fontFamily: "Helvetica Neue, Arial, sans-serif",
  fontSize: "6rem",
  fontWeight: "600",
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
  fontSize: "1.8rem",
  lineHeight: "2rem",
  marginTop: "48vh",
  textShadow: "0px 2px 3px #000"
}

const buttonStyles = {
  backgroundColor: "#FFF",
  border: "1px solid",
  fontSize: "1.2rem",
  height: "2.4rem",
  marginTop: "2vh",
  width: "10rem"
}

const HeroContent = () => {
  return (
    <>
      <h1 style={largeTitleStyles} className="display-1 d-none d-md-block">
        <img style={logoStylesDesktop} src={logo} alt="Granny Fab Accoutrements" />
      </h1>
      <h1 style={smallTitleStyles} className="display-1 d-block d-md-none">
        <img style={logoStylesMobile} src={logo} alt="Granny Fab Accoutrements" />
      </h1>
      <p style={subtitleStylesDesktop} className="d-none d-md-block">
        <span style={{ display: "block" }}>when your favorite</span>
        <span style={{ display: "block" }}>color is sparkle</span>
      </p>
      <p style={subtitleStylesMobile} className="d-block d-md-none">
        <span style={{ display: "block" }}>when your favorite</span>
        <span style={{ display: "block" }}>color is sparkle</span>
      </p>
      <a href="https://www.depop.com/grannyfab/">
        <button style={buttonStyles} className="mr-2 d-none d-md-inline">shop</button>
      </a>
      <AnchorLink href={`#${sections[0].id}`}>
        <span style={darkScrollArrowStyles}></span>
      </AnchorLink>
    </>
  )
};

export default HeroContent;