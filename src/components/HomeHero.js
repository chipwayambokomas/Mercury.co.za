import React from 'react'
import homeimage from '../assests/image 10.png'
import './HomeHero.css'
import InstantQuote from './InstantQuote'

function HomeHero() {
    return (
        <>
            <div className='hero'>
                <img alt='heroimg' src={homeimage} className='homeimg'/>

                <div className='hero-text'>
                    <div className='container'>
                    <div className='sec1'>
                    <p className='p1'>Local Experties, International Capabilities</p>
                    <h1>The Best Logistic Services</h1>
                    <h1 className='h1'>And Courier Services</h1> 
                    
                    <p className='p2'>We have worked on some amazing ideas that span</p> 
                    <p className='p3'>4 different continents. Here are some of our projects</p> 
                    <p className='p4'>where change makers trusted us to deliver their</p> 
                    <p className='p5'>visions.</p>
                    <form>
                    <input placeholder='Track Your Shippments'/>
                    <button className='b21'>Track </button>
                    </form>
                    <p className='p6'>Enter your 10 digit shipment code</p>
                    </div>
                    <div className='sec2'>
                        <h1></h1>
                    </div>
                    </div>                                                                    
                </div>                      
    <InstantQuote/>
            </div>
        </>
    )
}

export default HomeHero
