import './ServiceCards.css'

import React from 'react'

function ServiceCards() {
  return (
    <div className='ServiceCards'>

        <div className='SC1'>
        <i className="fa-solid fa-plane"></i>
        <p className='cardname-SC'>Air Transport</p>
        <p className='carddes-SC'>In publishing and graphic design,</p>
        <p className='carddes-SC2'>Lorem ipsum</p>
        </div>

        
        <div className='SC2'>
        <i className="fa-sharp fa-solid fa-truck"></i>
        <p className='cardname-SC'>Road Transport</p>
        <p className='carddes-SC'>In publishing and graphic design,</p>
        <p className='carddes-SC2'>Lorem ipsum</p>
        </div>

        
        <div className='SC3'>
        <i className="fa-sharp fa-solid fa-ship"></i>
        <p className='cardname-SC'>Shippments</p>
        <p className='carddes-SC'>In publishing and graphic design,</p>
        <p className='carddes-SC2'>Lorem ipsum</p>
        </div>
      
    </div>
  )
}

export default ServiceCards
