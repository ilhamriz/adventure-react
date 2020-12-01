import React, {useEffect} from 'react'
import Hero from '../Hero'
import Main from '../Main'
import Sponsor from '../Sponsor'
import Booking from '../Booking'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

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
