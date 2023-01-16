import React from "react"
import HomeHero from "../components/HomeHero.js"
import Navbar from '../components/Navbar'
import WHO from '../components/WHO'
import FAQ from "../components/FAQ.js"
import TestimoniesDemo from "../components/TestimoniesDemo.js"
import FeedbackAttributes from "../components/FeedbackAttributes.js"
import Footer from "../components/Footer.js"

import Navbar1 from "../components/Navbar1.js"
import SpecialServicesDemo from "../components/SpecialServicesDemo.js"



function Home () {

    return(
        <>
            <Navbar1/>
            <Navbar/>
            <HomeHero/>
            <WHO />
            
            <SpecialServicesDemo/>
            <FAQ />
           
            <TestimoniesDemo/>
            <FeedbackAttributes/>
            <Footer/>
            
            
        
        </>
    )

}

export default Home