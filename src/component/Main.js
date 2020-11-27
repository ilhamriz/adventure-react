import React from 'react'
import CardItem from './CardItem'
import './Main.css'
import {des1,des2,des3,des4} from '../images'

function Main(props) {
  return (
    <div className='main' id='main'>
      <div className="main-container">
        {props.title === 'true' ?
          <div className="main-titles">
            <p>LET'S MAKE MEMORY</p>
            <h2 className='main-title'>With our favorite destination</h2>
          </div>
          : ''}
        <div className="main-cards">
          <ul className="main-card-container">
            <CardItem src={des1} name='Poon Hill' country='Nepal' rate='4.6' />
            <CardItem src={des3} name='Cappadocia' country='Turkey' rate='4.8' />
          </ul>
          <ul className="main-card-container">
            <CardItem src={des2} name='Mount Fuji' country='Japan' rate='4.7' />
            <CardItem src={des4} name='Arabian Desert' country='Dubai' rate='4.5' />
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Main
