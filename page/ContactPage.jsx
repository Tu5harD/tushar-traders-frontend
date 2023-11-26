import React from 'react'
import Map from '../src/components/Contact/Map'
import Contact from '../src/components/Contact/Contact'
import Wrapper from '../src/components/Wrapper';

const ContactPage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.title = "Contact"

  return (
    
    <Wrapper >
      <Map/>
      <Contact/>
    </Wrapper>
  )
}

export default ContactPage
