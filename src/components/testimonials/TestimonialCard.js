import React from 'react';

const TestimonialCard = ({ image, title, subtitle, comment }) => {

    return (
        <div className="testimonial_card">
            <div className="thumb">
                <img src={image} alt="Testimonial Avatar" className="testimonal_img" />
            </div>

            <h3 className="title">{title}</h3>

            <span className="subtitle">{subtitle}</span>

            <p className="comment">{comment}</p>
        </div>
    )
}

export default TestimonialCard