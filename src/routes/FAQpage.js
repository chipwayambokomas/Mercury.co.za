import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from '../components/Navbar1'
import RegularHero from '../components/RegularHero'
import './FAQpage.css'
import homeimage from '../assests/regular.png'
import Footer from "../components/Footer.js"
import FAQpagequestions from '../components/FAQpagequestions'
                   
function FAQpage() {
  return (
    <>
        <Navbar1/>
        <Navbar/>
        <RegularHero
        
        cName="Regularhero"
        RegularheroImg={homeimage}
        title='FAQ'
        sub='Home - FAQ Page'
        des1='In publishing and graphic design, Lorem ipsum is a'
        des2='placeholder text commonly used to demonstrate'
        backgroundTitle='FAQ'
        />
        <FAQpagequestions/>
        <Footer/>
        
        
    </>
  )
}

export default FAQpage
