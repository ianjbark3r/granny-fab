import React from 'react';

const liClasses = "mb-2"

const Footer = () => {
  return (
    <footer style={{ 
        backgroundColor:"black", 
        color:"white"
      }} 
      className="row justify-content-center p-5"
    >
      <div className="col">
        <strong>Copyright Granny Fab, 2020</strong>
      </div>
      <div className="col text-right">
        <ul style={{ listStyleType:"none" }}>
          <li className={liClasses}>Store</li>
          <li className={liClasses}>Twitter</li>
          <li className={liClasses}>Facebook</li>
          <li className={liClasses}>Contact</li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;