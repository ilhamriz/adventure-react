import React from 'react'
import Booking from '../Booking'
import HeroOthers from '../HeroOthers'
import Main from '../Main'
import {des} from '../../images'

function Destination() {
  return (
    <>
      <HeroOthers src={des} alt='Destination' subs='Let’s make memory' title='With our favorite destination' />
      <Main title='false'/>
    </>
  )
}

export default Destination
