import React from 'react'
import './RegularHero.css'

function RegularHero(props) {
  return (
    <div className={props.cName}>
      
      <img alt='FAQheroimg' src={props.RegularheroImg} className='FAQhomeimg'/>

        <div className='RegularHero-text'>

            <h1>{props.title}</h1>
            <p className='Regular-sub'>{props.sub}</p>
            <p className='Regualr-description'>{props.des1}</p>
            <p>{props.des2}</p>

        </div>

        <div className='RegularHero-Backgroundtext'>
            <h1>{props.backgroundTitle}</h1>
        </div>

    </div>
  )
}

export default RegularHero
