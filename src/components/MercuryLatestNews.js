import './MercuryLatestNews.css'
import React from 'react'
import TData from './NewsData'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import pc1 from '../assests/newsPic1.png'
import pc2 from '../assests/newsPic2.png'
import pc3 from '../assests/newsPic3.jpg'



export default function MercuryLatestNews() {
    return (
        <div>
            <div className='MercuryLatestNews'>

                <h1>Mercury Latest News</h1>

                <Swiper className="swiper"
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                   
                    <SwiperSlide>


                        <TData
                            image={pc1}
                            heading='News tittle here'
                            position='CMO, Woldie'
                            text='Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.'

                        />


                    </SwiperSlide>
                    <SwiperSlide>
                        <TData
                            image={pc2}
                            heading='News tittle here'
                            position='CMO, Woldie'
                            text='Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.'

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TData
                            image={pc3}
                            heading='News tittle here'
                            position='CMO, Woldie'
                            text='Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.'

                        />
                    </SwiperSlide>
                </Swiper>


            </div>
        </div>
    )
}
