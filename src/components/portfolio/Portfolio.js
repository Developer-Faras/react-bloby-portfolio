import React, { useState } from 'react';
import './portfolio.css';
import WorkCard from './WorkCard';
import worksData from './worksData';


const Portfolio = () => {
  const [workItems, setWorkItems] = useState(worksData);

  const handleFilter = (category) => {

    const filterItems = workItems.filter((work) => {
      if (category === '') {
        return worksData;
      } else if (category !== '') {
        return work.category.toUpperCase() === category.toUpperCase();
      }
    })

    setWorkItems(filterItems);
  }

  return (
    <div className="portfolio section container" id="portfolio">
      <h2 className="section_title">Recent  Works</h2>

      <div className="works_filter">
        <span className="work_item" onClick={() => handleFilter("")}>Everything</span>
        <span className="work_item" onClick={() => handleFilter("Creative")}>Creative</span>
        <span className="work_item" onClick={() => handleFilter("Art")}>Art</span>
        <span className="work_item" onClick={() => handleFilter("Design")}>Design</span>
        <span className="work_item" onClick={() => handleFilter("Branding")}>Branding</span>
      </div>

      <div className="works_container grid">
        {workItems.map((work) => <WorkCard key={work.id} {...work} />)}
      </div>

    </div>
  )
}

export default Portfolio