import './AboutUsCards.css'

import React from 'react'
import pic1 from '../assests/ourmission.jpeg'
import pic2 from '../assests/serverroom.jpg'

function AboutUsCards() {
    return (
        <div>

            <div className='OurMission'>
                <img className='pic1A' alt='pic1A' src={pic1} width={820} height={460} />

                <div className='serviceDetailCardA'>
                    <h2 className='serviceDetailCardTitle'>OUR MISSION</h2>
                    <p className='serviceDetailCardDetail'>To be recognized as the top logistics and express</p>
                    <p className='serviceDetailCardDetail'> transportation service provider in the country.</p>
                </div>

            </div>
            <div className='InnovationTechnology'>
                <img className='pic2' alt='pic2' src={pic2} width={995} height={620} />

                <div className='serviceDetailCard1A'>
                    <h2 className='serviceDetailCardTitle'>INNOVATION AND TECHNOLOGY</h2>
                    <p className='serviceDetailCardDetail'>Mercury Express Logistics services stems its service offerings from listening to customers and </p>
                    <p className='serviceDetailCardDetail'>developing new products and services that address market needs. Creativity is continually celebrated and rewarded from </p>
                    <p className='serviceDetailCardDetail'> all levels of the organisation. Small and big ideas come from all levels of the company to achieve the </p>
                    <p className='serviceDetailCardDetail'>highest levels of customer satisfaction.</p>

                </div>

            </div>

            <div className='partners'>
                <h1>OUR BRANDS</h1>

                <div className='thepartners'>
                <img className='tigmoopartner' alt='tigmoopartner' src='https://www.mercury.co.zm/wp-content/uploads/2015/11/logo.png' />

                </div>
            </div>

        </div>
    )
}

export default AboutUsCards
