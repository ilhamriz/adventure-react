import React, {useEffect} from 'react'
import HeroOthers from '../HeroOthers'
import {book} from '../../images'
import FormContact from '../FormContact'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once:true
    })
  }, [])

  return (
    <>
      <HeroOthers src={book} alt='Contact' subs='I sincerely say' title='Thanks for coming' />
      <FormContact />
    </>
  )
}

export default Contact
