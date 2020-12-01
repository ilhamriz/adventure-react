import React, {useEffect} from 'react'
import HeroOthers from '../HeroOthers'
import Main from '../Main'
import {des} from '../../images'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Destination() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <>
      <HeroOthers src={des} alt='Destination' subs='Let’s make memory' title='With our favorite destination' />
      <Main title='false'/>
    </>
  )
}

export default Destination
