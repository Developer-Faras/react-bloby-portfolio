import React from 'react';
import './pricing.css';
import PricingCard from './PricingCard';

import PricingData from './PricingData';

const Pricing = () => {
  return (
    <div className="section container pricing" id="pricing">
      <h2 className="section_title">Pricing Plans</h2>

      <div className="pricing_data grid">
        {PricingData.map((data) => <PricingCard key={data.id} data={data} />)}
      </div>
    </div>
  )
}

export default Pricing