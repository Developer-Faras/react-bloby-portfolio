import React from 'react';
import './portfolio.css';

import WorksData from './WorksData';

const Portfolio = () => {
  return (
    <div className="portfolio section container" id="portfolio">
      <h2 className="section_title">Recent  Works</h2>

      <div className="works_filter">
        <span className="work_item">Everything</span>
        <span className="work_item">Creative</span>
        <span className="work_item">Art</span>
        <span className="work_item">Design</span>
        <span className="work_item">Branding</span>
      </div>

      <div className="work_container grid">
        {WorksData.map((work) => {
          console.log(work)
          return (
            <div className="as">
              asdasd
            </div>
          )
        })}
        asd
      </div>

    </div>
  )
}

export default Portfolio