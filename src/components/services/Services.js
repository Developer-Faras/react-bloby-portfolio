import React from 'react';
import './services.css';

import Image1 from './../../assets/service-1.svg';
import Image2 from './../../assets/service-2.svg';
import Image3 from './../../assets/service-3.svg';
import ServicesCard from './ServicesCard';


const ServicesData = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    background: "#697AF2"
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    background: "#FFCD41"
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    background: "#FF9489"
  },
  {
    id: 4,
    image: Image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    background: "#FFCD41"
  },
  {
    id: 5,
    image: Image3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    background: "#FF9489"
  },
  {
    id: 6,
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    background: "#697AF2"
  }
]

const Services = () => {
  return (
    <div className="services container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {ServicesData.map((data, index) => <ServicesCard key={data.id} data={data} />)}
      </div>
    </div>
  )
}

export default Services