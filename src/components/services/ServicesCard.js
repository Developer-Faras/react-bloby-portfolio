import React from 'react';

const ServicesCard = (props) => {
    const { image, title, description, background } = props.data;

    const cardStyle = {
        background: background
    }

    return (
        <div className="services_card" style={cardStyle}>
            <img src={image} alt={title} className="services_card_img" />

            <h3 className="services_card_title">{title}</h3>
            <p className="services_card_description">{description}</p>
        </div>
    )
}

export default ServicesCard