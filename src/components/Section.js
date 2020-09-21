import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { assets } from '../images/Assets';

const descriptionClasses = "col-md col-10";

const imageClasses = "d-block w-100";

const imageDivClasses = "col-md-6 d-none d-lg-block px-0";

const mobileImageClasses = "col-sm d-block d-lg-none px-0";

const rowClasses = "row justify-content-center";

const buttonStyles = {
  backgroundColor:"#FFF",
  border:"1px solid",
  fontSize:"1.3rem",
  height:"2.5rem",
  marginTop:"2.8vh",
  width:"10rem"
}

const descriptionStyles = {
  height:"100vh",
  margin:"0 7vw 0 7vw"
}

const largeImageStyles = {
  height: "100vh",
  objectFit: "cover",
  width: "auto"
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

const descriptionItemStyles = {
  fontFamily:"Helvetica Neue, Arial, sans-serif",
  fontSize:"1.1rem",
  fontWeight:"500",
  lineHeight:"1.7rem",
  marginBottom:"2.8vh"
}

const scrollArrowStyles = {
  position: "absolute",
  bottom: "4vh",
  left: "50%",
  width: "24px",
  height: "24px",
  marginLeft: "-12px",
  borderLeft: "4px solid #000",
  borderBottom: "4px solid #000",
  WebkitTransform: "rotate(-45deg)",
  transform: "rotate(-45deg)",
  boxSizing: "border-box"
}

const titleStyles = {
  fontSize:"2.5rem", 
  fontWeight:"700", 
  marginBottom:"3vh",
  paddingTop:"calc(4vh + 5vw)"
}

export default class Section extends Component {
  render() {
    const { 
      id,
      buttonTxt,
      descP1,
      descP2,
      descP3,
      descP4,
      img,
      mobile,
      title,
      url
    } = this.props.section;

    return (
      <div 
        className={rowClasses}
        id={`${id}`}  
      >
        <div className={mobileImageClasses}>
          <div
            id={`${id}CarouselControlsMobile`}
            className="carousel slide"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={assets[`${mobile}0`]}
                  style={largeImageStyles}
                  className={imageClasses}
                  key={`img-sm-${id}`}
                  alt=""
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src={assets[`${mobile}1`]}
                  style={largeImageStyles}
                  className={imageClasses}
                  key={`img-sm-${id}`}
                  alt=""
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src={assets[`${mobile}2`]}
                  style={largeImageStyles}
                  className={imageClasses}
                  key={`img-sm-${id}`}
                  alt=""
                ></img>
              </div>
            </div>
            {assets[`${img}1`] && (
              <>
                <a
                  className="carousel-control-prev"
                  href={`#${id}CarouselControlsMobile`}
                  role="button"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href={`#${id}CarouselControlsMobile`}
                  role="button"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </>
            )}
          </div>
          <AnchorLink href={`#${id}-desc`}>
            <span style={darkScrollArrowStyles}></span>
          </AnchorLink>
        </div>
        {this.props.index % 2 === 0 && (
          <div className={imageDivClasses}>
            <div
              id={`${id}CarouselControlsLeft`}
              className="carousel slide"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={assets[`${img}0`]}
                    style={largeImageStyles}
                    className={imageClasses}
                    key={`img-sm-${id}`}
                    alt=""
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={assets[`${img}1`]}
                    style={largeImageStyles}
                    className={imageClasses}
                    key={`img-sm-${id}`}
                    alt=""
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={assets[`${img}2`]}
                    style={largeImageStyles}
                    className={imageClasses}
                    key={`img-sm-${id}`}
                    alt=""
                  ></img>
                </div>
              </div>
              {assets[`${img}1`] && (
                <>
                  <a
                    className="carousel-control-prev"
                    href={`#${id}CarouselControlsLeft`}
                    role="button"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href={`#${id}CarouselControlsLeft`}
                    role="button"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </>
              )}
            </div>
          </div>
        )}
        <div style={descriptionStyles} className={descriptionClasses} key={`Description${id}`} id={`${id}-desc`}>
          <h1 style={titleStyles} key={`Title${id}`}>{title}</h1>
          {descP1 && <p style={descriptionItemStyles} key={`DescriptionItem1${id}`}>{descP1}</p>}
          {descP2 && <p style={descriptionItemStyles} key={`DescriptionItem2${id}`}>{descP2}</p>}
          {descP3 && <p style={descriptionItemStyles} key={`DescriptionItem3${id}`}>{descP3}</p>}
          {descP4 && <p style={descriptionItemStyles} key={`DescriptionItem4${id}`}v>{descP4}</p>}
          <a 
            href={`${url}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button style={buttonStyles} key={`Button${id}`}>{buttonTxt}</button>
          </a>
          <AnchorLink href={(id === 'about') ? '#home' : `#${this.props.nextId}`}>
            <span style={scrollArrowStyles}></span>
          </AnchorLink>
        </div>
        {this.props.index % 2 !== 0 && (
          <div className={imageDivClasses}>
            <div 
              id={`${id}CarouselControlsRight`} 
              className="carousel slide"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={assets[`${img}0`]}
                    style={largeImageStyles}
                    className={imageClasses}
                    key={`img-lg-${id}`}
                    alt=""
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={assets[`${img}1`]}
                    style={largeImageStyles}
                    className={imageClasses}
                    key={`img-lg-${id}`}
                    alt=""
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={assets[`${img}2`]}
                    style={largeImageStyles}
                    className={imageClasses}
                    key={`img-lg-${id}`}
                    alt=""
                  ></img>
                </div>
              </div>
              {assets[`${img}1`] && (
                <>
                  <a
                    className="carousel-control-prev"
                    href={`#${id}CarouselControlsRight`}
                    role="button"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href={`#${id}CarouselControlsRight`}
                    role="button"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
};