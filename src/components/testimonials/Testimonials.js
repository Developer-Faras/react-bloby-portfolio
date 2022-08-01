import React from 'react'
import './testimonials.css'

import TestimonialCard from './TestimonialCard'
import TestimonialData from './TestimonialData'

const Testimonials = () => {
  return (
    <div className="testimonoals section container" id="testimonials">
      <h2 className="section_title">{"Clients & Reviews"}</h2>

      <div className="testimonial_data grid">
        {TestimonialData.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
      </div>
    </div>
  )
}

export default Testimonials