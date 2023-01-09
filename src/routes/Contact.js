import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import RegularHero from '../components/RegularHero'
import homeimage from '../assests/regular.png'

function Contact() {
  return (
    <>
    <Navbar1/>
      <Navbar/>
      <RegularHero
        
        cName="Regularhero"
        RegularheroImg={homeimage}
        title='Contact Us'
        sub='Home - Contact Us Page'
        des1='In publishing and graphic design, Lorem ipsum is a'
        des2='placeholder text commonly used to demonstrate'
        backgroundTitle='CONTACT US'
        />
        
    </>
  )
}

export default Contact
