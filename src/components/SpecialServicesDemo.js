import './SpecialServicesDemo.css'
import distribution from '../assests/distribution.jpg'
import airfreight from '../assests/airfreight.jpg'
import oceanfreight from '../assests/oceanfreight.jpg'
import importexpress from '../assests/internationalexpress.jpg'
import domesticexpress from '../assests/domesticexpress.jpg'
import roadexpress from '../assests/roadexpress.jpg'


import { useState } from 'react';
import { Link } from 'react-router-dom';

import React from 'react'

function SpecialServicesDemo() {

  const [selected, setSelected] = useState(1);

    const handleColor = (row) => {
        setSelected(row.id);
    };

    const lists = [
      { id: 1, title: "Domestic Express", presentation: 'link1'},
      { id: 2, title: "International Express", presentation: 'link2' },
      { id: 3, title: "Road Freight", presentation: 'link3' },
      { id: 4, title: "Air Freight", presentation: 'link4' },
      { id: 5, title: "Ocean Freight", presentation: 'link5' },
      { id: 6, title: "Distribution & Warehousing", presentation: 'link6' }
      
       
      
  ];

  const [data, setData] = useState('Our services extend beyond the walls of the warehouse. You can rely on us for your distribution service.')

  const [picData, setPicData] = useState(domesticexpress)

  
  const [pageData, setPageData] = useState("01")

  function distributionf() {

    setData('Our services extend beyond the walls of the warehouse. You can rely on us for your distribution service.')
    setPicData(distribution)
    setPageData('01')

}
function airfreightf() {

    setData('Mercury Express Logistics currently offers over 10,000 sqm2 warehousing space, servicing all storage and cross-docking requirements.')
    setPicData(airfreight)
    setPageData('02')

}
function oceanfreightf() {

    setData('Mercury Express Logistics provides global door-to-door shipping solutions for your packages. With Export Express, you can ship and send your packages, door-to-door and to anywhere in the world all you need to do is visit an office near you.')
    setPicData(oceanfreight)
    setPageData('03')

}
function importexpressf() {

  setData('Our courier service operates around the clock and throughout the year so we’re always on hand to help.')
  setPicData(importexpress)
  setPageData('04')

}
function domesticexpressf() {

  setData('Domestic Express Services offers reliable door to door solutions for time-critical packages to be delivered within to any city.')
  setPicData(domesticexpress)
  setPageData('05')

}
function roadexpressf() {

  setData('With Road Freight, is guaranteed extensive and affordable domestic delivery of parcels between all towns within Zambia.')
  setPicData(roadexpress)
  setPageData('06')

}

function both(list) {

  if(list.id ===1)
  {domesticexpressf()}
  else if (list.id ===2) {
      importexpressf()
  } else if (list.id===3) {
    roadexpressf()
  } else if (list.id===4) {
    airfreightf()
  } else if (list.id===5) {
    oceanfreightf()
  } else {
    distributionf()
  }
  
  handleColor(list)
}
  return (
    <div className='SpecialServices'>

      <h1>Our Services</h1>

      <p className='SpecialServicesDes'>Globally known for our ability to handle every last detail of our customers' particular logistics and forwarding needs, Memory Logistic's Special Services team takes care of all your logistics.</p>

    <img alt='ServiceImage' className='ServiceImage' src={picData}></img>

    <div className='serviceOptions'>
    
    {lists.map((list) => (
                    <Link
                    
                        key={list.id}
    
                        onClick={() => both(list)}
                        style={{ color: list.id === selected ? "#FF5300" : "white" }}
                        className={list.presentation}>
                    
                        {list.title}
                    </Link>
                ))}
      
    </div>

    <div className='ServicePreview'>

      <p className='ServicePreviewDetail'>{data}</p>
      <ul className='b1'>
                        <li>
                            <Link to='/'>
                                <button className='ServicePageReadmore'>Learn More <i className='fa-solid fa-arrow-right'></i></button>
                            </Link>
                        </li>
                    </ul>


    </div>


    
      <div className='ServicePages'>
      <p className='noOfPages'>/06</p>
      <p className='CurrentPage'>{pageData}</p>
      
      </div>

     
  
    <div className='scroll'></div>
    <div className='scroll1'></div>
    <div className='scroll2'></div>

    <div className='pageNumbers'>
    <p className='p11'>1.</p>
    <p className='p2111'>2.</p>
    <p className='p31'>3.</p>
    <p className='p41'>4.</p>
    <p className='p51'>5.</p>
    <p className='p61'>6.</p>

    </div>

    </div>
  )
}

export default SpecialServicesDemo
