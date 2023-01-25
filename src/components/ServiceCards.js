import './ServiceCards.css'

import React from 'react'

function ServiceCards() {
  return (
    <div className='ServiceCards'>

        <div className='SC1'>
        <i className="fa-solid fa-plane"></i>
        <p className='cardname-SC'>Air Transport</p>
        <p className='carddes-SC'> Offering a global and cost effective solution to all of your air freight needs.</p>
        </div>

        
        <div className='SC2'>
        <i className="fa-sharp fa-solid fa-truck"></i>
        <p className='cardname-SC'>Road Transport</p>
        <p className='carddes-SC'>We provide comprehensive ocean freight forwarding services.</p>
        </div>

        
        <div className='SC3'>
        <i className="fa-sharp fa-solid fa-ship"></i>
        <p className='cardname-SC'>Shippments</p>
        <p className='carddes-SC'>We have one of the largest and most advanced land freight networks in Zambia.</p>
        </div>
      
    </div>
  )
}

export default ServiceCards
