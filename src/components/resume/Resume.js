import React from 'react';
import './resume.css';
import ResumeCard from './ResumeCard';

const ExpirienceData = [
  {
    id: 1,
    category: "education",
    icon: "fa-graduation-cap",
    year: "2019 - present",
    title: "Academic Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 2,
    category: "education",
    icon: "fa-graduation-cap",
    year: "2013 - 2017",
    title: "Bachelor's Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 3,
    category: "education",
    icon: "fa-graduation-cap",
    year: "2009 - 2013",
    title: "Honours Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 4,
    category: "experience",
    icon: "fa-briefcase",
    year: "2019 - present",
    title: "Web Designer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 5,
    category: "experience",
    icon: "fa-briefcase",
    year: "2013 - 2017",
    title: "Front-End Developer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 6,
    category: "experience",
    icon: "fa-briefcase",
    year: "2009 - 2013",
    title: "Back-End Developer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
];

const Resume = () => {
  return (
    <div className="resume section container" id="resume">
      <h2 className="section_title">Experience</h2>

      <div className="resume_container grid">
        {ExpirienceData.map((value, index) => {
          if (value.category === "education") {
            return (
              <ResumeCard key={index} {...value} />
            )
          }
        })}
      </div>

      <div className="resume_container grid">
        {ExpirienceData.map((value, index) => {
          if (value.category === "experience") {
            return (
              <ResumeCard key={index} {...value} />
            )
          }
        })}
      </div>

    </div>
  )
}

export default Resume