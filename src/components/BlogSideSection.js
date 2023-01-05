import './BlogSideSection.css'
import React from 'react'
import { LatestData, CategoryData } from './BlogSideSectionData'

function BlogSideSection() {
  return (
    <div className='BlogSideSection'>

        <input type='text' placeholder='Search here...'></input>
        <i className="fa-solid fa-magnifying-glass"></i>

        <div className='Latest1'>
            <h2>Latest Post</h2>

            {LatestData.map((item,index) => {
                return(
            <div className='posts' key={index}>
            <img alt='latestpic' className='latestpic' src={item.image}></img>
            <p>{item.preview}</p>
            </div>
            )
        })}

        </div>

        <div className='Categories'>

            <h2>Categories</h2>

            {CategoryData.map((item,index) => {  
                return(

            <div className='Category' key={index}>
                <p className='categoryname'>{item.title}</p>
                <button className='categorybutton'>{item.number}</button>
            </div>
            )
        
        })}
        </div>

        <div className='Tags'>

            <h2>Tags</h2>

            <div className='tags1'>
                <button className='tagname1'>Roadways</button>
                <button className='tagname2'>Airways</button>
            </div>
            <div className='tags1'>
                <button className='tagname1'>Shipment</button>
                <button className='tagname2'>Lorem Ipsum</button>
            </div>
            <div className='tags1'>
                <button className='tagname1'>Lorem Ipsum</button>
                <button className='tagname2'>Lorem Ipsum</button>
            </div>
        </div>


      
    </div>
  )
}

export default BlogSideSection
