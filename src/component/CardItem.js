import React from 'react'
import { Link } from 'react-router-dom'
import './CardItem.css'

function CardItem(props) {
  return (
    <Link to='/adventure-react/destination' className='card' data-aos='fade-up'>
      <img src={props.src} alt={props.name} />
      <div className="card-info">
        <div className="card-info-title">
          <p className='card-info-name'>{props.name}</p>
          <p>{props.country}</p>
        </div>
        <div className="card-info-rate">
          <p>{props.rate} <i className="fas fa-star"/></p>
        </div>
      </div>
    </Link>
  )
}

export default CardItem
