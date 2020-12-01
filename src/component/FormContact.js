import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import './FormContact.css'
import './DatePicker.css'

function FormContact() {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('Dubai');
  const [date, setDate] = useState(null);

  const submit = (e) => {
    alert('Your form has been submitted. Thank you!')
    setName('')
    setDestination('Dubai')
    setDate(null)
    e.preventDefault()
  }

  const handleName = e => {
    setName(e.target.value)
  }

  const handleDestination = e => {
    setDestination(e.target.value)
  }

  return (
    <>
      <form className='form' onSubmit={submit}>
        <h3 className='form-title' data-aos='fade-up'>Please fill the form.</h3>
        <input type="text" className='input' data-aos='fade-up' autoComplete='off' placeholder='Name' value={name} onChange={handleName} required/>
        <select name="destination" data-aos='fade-up' className='input' value={destination} onChange={handleDestination}>
          <option value="Dubai">Dubai</option>
          <option value="Japan">Japan</option>
          <option value="Nepal">Nepal</option>
          <option value="Turkey">Turkey</option>
        </select>
        <section data-aos='fade-up'>
          <DatePicker
            onChange={setDate}
            value={date}
            format='dd-MM-y'
            dayPlaceholder="dd"
            monthPlaceholder="mm"
            yearPlaceholder="yyyy"
            required={true}
          />          
        </section>
        <input type="submit" data-aos='fade-up' className='form-submit' value="Book Now"/>
      </form>     
    </>
  )
}

export default FormContact
