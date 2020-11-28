import React from 'react'
import HeroOthers from '../HeroOthers'
import {gal} from '../../images'
import GalleryItem from '../GalleryItem'
import SimpleReactLightbox from "simple-react-lightbox";

function Gallery() {
  return (
    <div>
      <HeroOthers src={gal} alt='Gallery' subs='Make your eye shine' title='By looking at our pictures' />      
      <SimpleReactLightbox>
        <GalleryItem />
      </SimpleReactLightbox>
    </div>
  )
}

export default Gallery
