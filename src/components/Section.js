import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const largeImageClasses = "col-md-6 d-none d-lg-block"

const smallImageClasses = "col-sm-12 d-block d-lg-none"

const descriptionClasses = "col-md col-10"

const titleStyles = {
  fontSize:"2.5rem", 
  fontWeight:"700", 
  marginBottom:"3vh",
  paddingTop:"calc(4vh + 5vw)"
}

const sectionStyles = {
  
}

const descriptionStyles = {
  height:"100vh",
  margin:"0 7vw 0 7vw"
}

const descriptionItemStyles = {
  fontFamily:"Helvetica Neue, Arial, sans-serif",
  fontSize:"1.1rem",
  fontWeight:"500",
  lineHeight:"1.7rem",
  marginBottom:"2.8vh"
}

const buttonStyles = {
  backgroundColor:"#FFF",
  border:"1px solid",
  fontSize:"1.3rem",
  height:"2.5rem",
  marginTop:"2.8vh",
  width:"10rem"
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
      title,
      url
    } = this.props.section;

    const largeImageStyles = {
      backgroundAttachment:"fixed",
      backgroundImage:`url(${img})`,
      backgroundPosition:"left",
      backgroundSize:"contain",
      height:"100vh"
    }

    const largeImageStylesRight = {
      backgroundAttachment:"fixed",
      backgroundImage:`url(${img})`,
      backgroundPosition:"right",
      backgroundSize:"contain",
      height:"100vh"
    }

    const smallImageStyles = {
      backgroundImage:`url(${img})`,
      backgroundPosition:"center",
      backgroundSize:"cover",
      height:"100vh"
    }

    if (this.props.index % 2 === 0) {
      return (
        <section 
          style={sectionStyles} 
          className="row justify-content-center" 
          key={`Section${id}`}
          id={`${id}`}
        >
          <div style={largeImageStyles} className={largeImageClasses} key={`LargeImage${id}`}></div>
          <div style={smallImageStyles} className={smallImageClasses} key={`SmallImage${id}`}>
            <AnchorLink href={`#${id}-desc`}>
              <span style={darkScrollArrowStyles}></span>
            </AnchorLink>
          </div>
          <div style={descriptionStyles} className={descriptionClasses} key={`Description${id}`} id={`${id}-desc`}>
            <h1 style={titleStyles} key={`Title${id}`}>{title}</h1>
            {descP1 && <p style={descriptionItemStyles} key={`DescriptionItem1${id}`}>{descP1}</p>}
            {descP2 && <p style={descriptionItemStyles} key={`DescriptionItem2${id}`}>{descP2}</p>}
            {descP3 && <p style={descriptionItemStyles} key={`DescriptionItem3${id}`}>{descP3}</p>}
            {descP4 && <p style={descriptionItemStyles} key={`DescriptionItem4${id}`}v>{descP4}</p>}
            <a href={`${url}`}>
              <button style={buttonStyles} key={`Button${id}`}>{buttonTxt}</button>
            </a>
            <AnchorLink href={`#${this.props.nextId}`}>
              <span style={scrollArrowStyles}></span>
            </AnchorLink>
          </div>
        </section>
      )
    } else {
      return (
        <section 
          style={sectionStyles} 
          className="row justify-content-center" 
          key={`Section${id}`}
          id={`${id}`}
        >
          <div style={smallImageStyles} className={smallImageClasses} key={`SmallImage${id}`}>
            <AnchorLink href={`#${id}-desc`}>
              <span style={darkScrollArrowStyles}></span>
            </AnchorLink>
          </div>
          <div style={descriptionStyles} className={descriptionClasses} key={`Description${id}`} id={`${id}-desc`}>
            <h1 style={titleStyles} key={`Title${id}`}>{title}</h1>
            {descP1 && <p style={descriptionItemStyles} key={`DescriptionItem1${id}`}>{descP1}</p>}
            {descP2 && <p style={descriptionItemStyles} key={`DescriptionItem2${id}`}>{descP2}</p>}
            {descP3 && <p style={descriptionItemStyles} key={`DescriptionItem3${id}`}>{descP3}</p>}
            {descP4 && <p style={descriptionItemStyles} key={`DescriptionItem4${id}`}>{descP4}</p>}
            <a href={`${url}`}>
              <button style={buttonStyles} key={`Button${id}`}>{buttonTxt}</button>
            </a>
            <AnchorLink href={`#${this.props.nextId}`}>
              <span style={scrollArrowStyles}></span>
            </AnchorLink>
          </div>
          <div style={largeImageStylesRight} className={largeImageClasses} key={`LargeImage${id}`}></div>
        </section>
      )
    }
  }
};