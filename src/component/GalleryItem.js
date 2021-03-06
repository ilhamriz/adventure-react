import React, { Component } from 'react'
import './GalleryItem.css'
import {gal1,gal2,gal3,gal4,gal5,gal6,gal7,gal8,gal9,gal10,gal11,gal12} from '../images'
import { SRLWrapper } from "simple-react-lightbox"

const options = {
  buttons: {
    showAutoplayButton: false,
    showFullscreenButton: false,
    showThumbnailsButton: false,
    size: '40px'
  },
  caption: {
    showCaption: false
  },
  thumbnails: {
    showThumbnails: false
  }
}

class GalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flex1: [gal1,gal2,gal3],
      flex2: [gal4,gal5,gal6],
      flex3: [gal7,gal8,gal9],
      flex4: [gal10,gal11,gal12]
    }
  }
  render() {
    const { flex1, flex2, flex3, flex4 } = this.state;
    return (
      <div className="gallery">
        <SRLWrapper options={options}>
        <div className='gallery-container'>
          <div className="column">
            {flex4.map((val,idx) => {
              return (
                <img key={idx} src={val} alt="Gallery Images" data-aos='fade-up' />                
              )
            })}
          </div>
          <div className="column">
            {flex2.map((val,idx) => {
              return (
                <img key={idx} src={val} alt="Gallery Images" data-aos='fade-up' />                
              )
            })}
          </div>
          <div className="column">
            {flex3.map((val,idx) => {
              return (
                <img key={idx} src={val} alt="Gallery Images" data-aos='fade-up' />                
              )
            })}
          </div>
          <div className="column">
            {flex1.map((val,idx) => {
              return (
                <img key={idx} src={val} alt="Gallery Images" data-aos='fade-up' />                
              )
            })}
            </div>
        </div>
        </SRLWrapper>
      </div>
    )
  }
}

export default GalleryItem
