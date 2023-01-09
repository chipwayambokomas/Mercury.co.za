import Navbar from "../components/Navbar"
import Navbar1 from "../components/Navbar1"
import Footer from '../components/Footer'
import RegularHero from '../components/RegularHero'
import homeimage from '../assests/regular.png'
import './About.css'
import AboutUsCards from "../components/AboutUsCards"

function About () {

    return(
        <>
        <Navbar1/>
        <Navbar/>
        <RegularHero
        
        cName="Regularhero"
        RegularheroImg={homeimage}
        title='About Us'
        sub='Home - About Us Page'
        des1='In publishing and graphic design, Lorem ipsum is a'
        des2='placeholder text commonly used to demonstrate'
        backgroundTitle='ABOUT US'
        />
    <div className="intro">
        <h1>WE ARE MERCURY EXPRESS LOGISTICS!</h1>

        <p>Mercury Express Logistics wholly owned Zambian company that is a leading provider of comprehensive logistics and transportation solutions. We began operations in 1994 under the name of Mercury Couriers, in direct response to the needs of the customers we diversified our operations and developed into a full service logistics company, to ensure that we offer our customers the complete solution. With 11 branch offices and over 20 agent locations and still growing, we are able to deliver and pick up parcels to any part of the country!</p>

        <p>Globally, the company has access to over 200,000 employees that are able to deliver efficiencies in various service offerings. We have the required knowledge, employee dedication and strong culture of passion for excellence to provide the best logistics solutions at very competitive rates.</p> 
        <p>
        The range of services offered by Mercury Express Logistics includes international and domestic express delivery, freight forwarding, contract logistics, and online shopping services.</p>
        </div>

        <AboutUsCards/>

        <Footer/>
        
        </>
    )

}

export default About 