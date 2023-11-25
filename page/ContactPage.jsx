import React from 'react'
import Map from '../src/components/Contact/Map'
import Contact from '../src/components/Contact/Contact'

const ContactPage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.title = "Contact"

  return (
    <div>
      <Map/>
      <Contact/>
    </div>
  )
}

export default ContactPage
