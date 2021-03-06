import React from 'react'
import './Hero.css'
import { heroImg } from '../images'
import {Button} from './Button'

function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} alt="" className="hero-image"/>
      <div className='hero-container'>
        <h1 className='hero-title' data-aos='fade-up'>Discover the most beautiful places in the world</h1>
        <Button to='/adventure-react/destination'>Get Started</Button>
      </div>
    </div>
  )
}

export default Hero
