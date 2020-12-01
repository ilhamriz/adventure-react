import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export const Button = ({children, to}) => {
  return (
    <Link to={to} className='btn-container' data-aos='fade-up' data-aos-delay='300'>
      <button className='btn'>
          {children}
      </button>
    </Link>
  )
}
