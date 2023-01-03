import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import RegularHero from '../components/RegularHero'
import homeimage from '../assests/regular.png'
import Footer from '../components/Footer'
import ServiceCards from '../components/ServiceCards'

function Services() {
  return (
    <>
    <Navbar1/>
    <Navbar/>
    <RegularHero
        
        cName="Regularhero"
        RegularheroImg={homeimage}
        title='Our Services'
        sub='Home - Service Page'
        des1='In publishing and graphic design, Lorem ipsum is a'
        des2='placeholder text commonly used to demonstrate'
        backgroundTitle='SERVICE'
        />

    <ServiceCards/>

    <Footer/>
        
    </>
  )
}

export default Services
