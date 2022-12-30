import React from 'react'
import './Testimonies.css'
import TData from './TestimoniesData'
import 'swiper/css'
import {Swiper,SwiperSlide} from 'swiper/react'

import pc from '../assests/fake.jpg'


function Testimonies() {
    return (
        <div className='Testimonies'>

            <h1>What clients say about Mercury</h1>

            <Swiper className="swiper"
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>

      <TData 
            image={pc}
            heading= 'Janet Moore'
            position='CMO, Woldie'
            text='Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.'
            
            />

      </SwiperSlide>
      <SwiperSlide>

            
      <TData 
            image={pc}
            heading= 'Janet Moore'
            position='CMO, Woldie'
            text='Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.'
            
            />


      </SwiperSlide>
      <SwiperSlide>
      <TData 
            image={pc}
            heading= 'Janet Moore'
            position='CMO, Woldie'
            text='Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.'
            
            />
      </SwiperSlide>
      <SwiperSlide>
      <TData 
            image={pc}
            heading= 'Janet Moore'
            position='CMO, Woldie'
            text='Working with Micky is a pleasure. We are impressed by the way how their teamwork. It’s professional, at a good pace with great communication about our business needs. They were prepared extremely well to work with our company.'
            
            />
      </SwiperSlide>
    </Swiper>


        </div>
    )
}

export default Testimonies
