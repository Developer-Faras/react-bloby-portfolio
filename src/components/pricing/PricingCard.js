import React from 'react';

const PricingCard = ({ data }) => {
    const { image, name, description, supports, priceCurency, priceTime, price, best } = data;

    return (
        <div className={`pricing_card ${best ? 'best' : ''}`}>
            {best ? <span className="badge">Recomended</span> : ''}

            <img src={image} alt="" className="pricing_image" />

            <h3 className="plan_name">{name}</h3>

            <p className="pricing_title">{description}</p>

            <ul className="support_list">
                {supports.map((support, index) => {
                    return (
                        <li key={index} className="pricing_support">{support}</li>
                    )
                })}
            </ul>

            <h3 className="pricing_price">
                <em>{priceCurency}</em> {price} <span>{priceTime}</span>
            </h3>

            <a href="/" className="pricing_btn btn">Get Started</a>
        </div>
    )
}

export default PricingCard