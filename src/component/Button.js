import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export const Button = ({children, type, onClick}) => {
  return (
    <Link to='/destination' className='btn-container'>
      <button type={type} className='btn' onClick={onClick}>
          {children}
      </button>
    </Link>
  )
}
