import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const data =[
  {
    avatar: AVTR1,
    name: 'Joan Nuhu',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
     

  },
   {
    avatar: AVTR2,
    name: 'Jonathan Kim',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
     

  },
  {
    avatar: AVTR3,
    name: 'Jonathan',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
     

  },
  {
    avatar: AVTR4,
    name: 'Benjamin Fortune',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
     

  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial_container" 
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        
          {
            data.map(({avatar, name, review}, index) => {
              return(
          <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}
            </small>
          </SwiperSlide>
              )
            })
          }
          
      </Swiper>
    </section>
  )
}

export default Testimonials