import React from 'react'
import './Footer.css'
import {ig,gh,dr} from '../images'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <p>All rights reserved. 2020</p>
        <p className='footer-logo'>Adventure.</p>
        <div className="footer-sosmeds">
          <a href="https://github.com/ilhamriz" target="_blank" rel="noopener noreferrer">
            <img src={gh} alt="Github"/>
          </a>
          <a href="https://www.instagram.com/ilhamriz7/" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="Instagram"/>
          </a>
          <a href="https://dribbble.com/ilhamriz" target="_blank" rel="noopener noreferrer">
            <img src={dr} alt="Dribbble"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
