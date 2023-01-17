import React, { useRef } from 'react'
import Slider from 'react-slick'
import pc from '../assests/newsPic1.png'
import pc1 from '../assests/newsPic2.png'
import pc2 from '../assests/newsPic3.jpg'
import './MercuryLatestNews.css'
import { Link } from 'react-router-dom'
import './TestimoniesDemo.css'

const TestimoniesDemo = () => {
    const sliderRef = useRef(null)
    console.log(sliderRef.current)
    return (
        <div>
            <div className='ButtonsTestimonies'>
                <h1>Mercury latest news</h1>
                <div className='Actually'>
                    <div className='LB' onClick={() => sliderRef.current.slickPrev()}>
                        <i className="fa-sharp fa-solid fa-angle-left"></i>
                    </div>
                    <div className='RB' onClick={() => sliderRef.current.slickNext()}>
                        <i className="fa-sharp fa-solid fa-angle-right" ></i>
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: 100 }}>
                <Slider
                    slidesToShow={3}
                    slidesToScroll={1}
                    className='sliderThing'
                    ref={sliderRef}
                >



                    <div className='t-cardA'
                    > <div className='s-image'>
                            <img alt='simg1' src={pc} />
                        </div>
                        <h4>Janet Moore</h4>
                        <h6>CMO, Woldie</h6>
                        <p>Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.</p>

                        <ul className="b1">
                            <li>
                                <Link to='/about-us'>
                                    <button className="whowearebuttonA">Learn More <i className='fa-solid fa-arrow-right'></i></button>
                                </Link>
                            </li>
                        </ul>

                    </div>

                    <div className='t-cardA'
                    > <div className='s-image'>
                            <img alt='simg1' src={pc1} />
                        </div>
                        <h4>Janet Moore</h4>
                        <h6>CMO, Woldie</h6>
                        <p>Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.</p>

                        <ul className="b1">
                            <li>
                                <Link to='/about-us'>
                                    <button className="whowearebuttonA">Learn More <i className='fa-solid fa-arrow-right'></i></button>
                                </Link>
                            </li>
                        </ul>

                    </div>

                    <div className='t-cardA'
                    > <div className='s-image'>
                            <img alt='simg1' src={pc2} />
                        </div>
                        <h4>Janet Moore</h4>
                        <h6>CMO, Woldie</h6>
                        <p>Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.</p>

                        <ul className="b1">
                            <li>
                                <Link to='/about-us'>
                                    <button className="whowearebuttonA">Learn More <i className='fa-solid fa-arrow-right'></i></button>
                                </Link>
                            </li>
                        </ul>

                    </div>


                    <div className='t-cardA'
                    > <div className='s-image'>
                            <img alt='simg1' src={pc} />
                        </div>
                        <h4>Janet Moore</h4>
                        <h6>CMO, Woldie</h6>
                        <p>Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.</p>

                        <ul className="b1">
                            <li>
                                <Link to='/about-us'>
                                    <button className="whowearebuttonA">Learn More <i className='fa-solid fa-arrow-right'></i></button>
                                </Link>
                            </li>
                        </ul>

                    </div>

                    <div className='t-cardA'
                    > <div className='s-image'>
                            <img alt='simg1' src={pc1} />
                        </div>
                        <h4>Janet Moore</h4>
                        <h6>CMO, Woldie</h6>
                        <p>Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.</p>

                        <ul className="b1">
                            <li>
                                <Link to='/about-us'>
                                    <button className="whowearebuttonA">Learn More <i className='fa-solid fa-arrow-right'></i></button>
                                </Link>
                            </li>
                        </ul>

                    </div>

                    <div className='t-cardA'
                    > <div className='s-image'>
                            <img alt='simg1' src={pc2} />
                        </div>
                        <h4>Janet Moore</h4>
                        <h6>CMO, Woldie</h6>
                        <p>Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.</p>

                        <ul className="b1">
                            <li>
                                <Link to='/about-us'>
                                    <button className="whowearebuttonA">Learn More <i className='fa-solid fa-arrow-right'></i></button>
                                </Link>
                            </li>
                        </ul>

                    </div>

                </Slider>

            </div>
        </div>
    )
}

export default TestimoniesDemo
