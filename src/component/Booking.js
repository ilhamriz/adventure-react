import React from 'react'
import './Booking.css'
import { Button } from './Button'


function Booking() {
  return (
    <div className='book'>
      <div className="book-container">
        <h2 className="book-title">Can’t wait for a vacation ?</h2>
        <Button to='/contact'>Book Now <i className="fas fa-long-arrow-alt-right btn-arrow" /></Button>
      </div>
    </div>
  )
}

export default Booking
