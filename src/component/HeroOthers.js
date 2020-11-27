import React from 'react'
import './HeroOthers.css'

function HeroOthers(props) {
  return (
    <div className='hero-other'>
      <img src={props.src} alt={props.alt}/>
      <div className="hero-other-container">
        <div className="all-titles">
          <p>{props.subs}</p>
          <h2 className='all-title'>{props.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default HeroOthers
