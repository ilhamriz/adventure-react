import React from 'react'
import './HeroOthers.css'

function HeroOthers(props) {
  return (
    <div className='hero-other'>
      <img src={props.src} alt={props.alt}/>
      <div className="hero-other-container">
        <div className="all-titles">
          <p data-aos='fade-up'>{props.subs}</p>
          <h2 data-aos='fade-up' data-aos-delay ='300' className='all-title'>{props.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default HeroOthers
