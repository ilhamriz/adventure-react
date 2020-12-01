import React from 'react'
import './Sponsor.css'
import {sponsor1,sponsor2,sponsor3,sponsor4} from '../images'

function Sponsor() {
  return (
    <div className='sponsor'>
      <div className="sponsor-container">        
        <div className="sponsor-titles">
          <p data-aos='fade-up'>THANK YOU</p>
          <h2 data-aos='fade-up' className='sponsor-title'>To our sponsors and partners</h2>
        </div>
        <div className="sponsor-items">
          <div className="sponsor-img-wrapper" data-aos='fade-up'>
            <img src={sponsor1} alt=""/>
          </div>
          <div className="sponsor-img-wrapper" data-aos='fade-up'>
            <img src={sponsor2} alt=""/>
          </div>
          <div className="sponsor-img-wrapper" data-aos='fade-up'>
            <img src={sponsor3} alt=""/>
          </div>
          <div className="sponsor-img-wrapper" data-aos='fade-up'>
            <img src={sponsor4} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsor
