import React from 'react';
import './testimonials.css';

import TestimonialCard from './TestimonialCard';
import TestimonialData from './TestimonialData';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <div className="testimonoals section container" id="testimonials">
      <h2 className="section_title">{"Clients & Reviews"}</h2>

      <Swiper
        className="testimonial_data grid"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {TestimonialData.map((testimonial, index) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonials
