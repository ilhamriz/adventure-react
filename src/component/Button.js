import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export const Button = ({children, to}) => {
  return (
    <Link to={to} className='btn-container'>
      <button className='btn'>
          {children}
      </button>
    </Link>
  )
}
