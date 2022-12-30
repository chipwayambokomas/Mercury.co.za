import React from "react"
import HomeHero from "../components/HomeHero.js"
import Navbar from '../components/Navbar'
import ServicesSection from "../components/ServicesSection.js"
import WHO from '../components/WHO'
import FAQ from "../components/FAQ.js"
import Testimonies from "../components/Testimonies.js"
import FeedbackAttributes from "../components/FeedbackAttributes.js"
import Footer from "../components/Footer.js"

import Navbar1 from "../components/Navbar1.js"



function Home () {

    return(
        <>
            <Navbar1/>
            <Navbar/>
            <HomeHero/>
            <WHO />
            <ServicesSection />
            <FAQ />
            <Testimonies/>
            <FeedbackAttributes/>
            <Footer/>
            
            
        
        </>
    )

}

export default Home