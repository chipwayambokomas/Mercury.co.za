import React, { useRef } from 'react'
import Slider from 'react-slick'
import pc from '../assests/fake.jpg'
import './Testimonies.css'
import './TestimoniesDemo.css'
const TestimoniesDemo = () => {
    const sliderRef = useRef(null)
    console.log(sliderRef.current)
    return (
        <div>
            <div className='ButtonsTestimonies'>
                <h1>What clients say about Mercury</h1>
                <div className='Actually'>
                    <div className='LB' onClick={() =>sliderRef.current.slickPrev()}>
                    <i className="fa-sharp fa-solid fa-angle-left"></i>
                    </div>
                    <div className='RB'onClick={() =>sliderRef.current.slickNext()}>
                    <i className="fa-sharp fa-solid fa-angle-right" ></i>
                    </div>
                </div>
            </div>
            <div style={{marginLeft: 100}}>
                <Slider
                slidesToShow={2}
                slidesToScroll={2}
                className='sliderThing'
                ref={sliderRef}
                
                >

                            <div className='t-card'
                            >
                            <p>Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.</p>
                            <div className='t-image'>
                                <img alt='simg1' src={pc} />
                            </div>
                            <h4>Janet Moore</h4>
                            <h6>CMO, Woldie</h6>
                            
                            
                        </div>
                        <div className='t-card'
                            >
                            <p>Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.</p>
                            <div className='t-image'>
                                <img alt='simg1' src={pc} />
                            </div>
                            <h4>Janet Moore</h4>
                            <h6>CMO, Woldie</h6>
                            
                            
                        </div>
                        <div className='t-card'
                            >
                            <p>Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.</p>
                            <div className='t-image'>
                                <img alt='simg1' src={pc} />
                            </div>
                            <h4>Janet Moore</h4>
                            <h6>CMO, Woldie</h6>
                            
                            
                        </div>
                        <div className='t-card'
                            >
                            <p>Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.</p>
                            <div className='t-image'>
                                <img alt='simg1' src={pc} />
                            </div>
                            <h4>Janet Moore</h4>
                            <h6>CMO, Woldie</h6>
                            
                            
                        </div>
                        <div className='t-card'
                            >
                            <p>Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.</p>
                            <div className='t-image'>
                                <img alt='simg1' src={pc} />
                            </div>
                            <h4>Janet Moore</h4>
                            <h6>CMO, Woldie</h6>
                            
                            
                        </div>
                      
                </Slider>

            </div>
        </div>
    )
}

export default TestimoniesDemo
