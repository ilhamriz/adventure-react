import React from 'react'
import Hero from '../Hero'
import Main from '../Main'
import Sponsor from '../Sponsor'
import Booking from '../Booking'

function Home() {
  return (
    <>
      <Hero />
      <Main title='true'/>
      <Sponsor />
      <Booking btn='true' title='Can’t wait for a vacation?'/>
    </>
  )
}

export default Home
