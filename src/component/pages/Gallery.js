import React, {useEffect} from 'react'
import HeroOthers from '../HeroOthers'
import {gal} from '../../images'
import GalleryItem from '../GalleryItem'
import SimpleReactLightbox from "simple-react-lightbox";
import AOS from 'aos'
import 'aos/dist/aos.css';

function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once:true
    })
  }, [])

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
