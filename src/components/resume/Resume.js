import React from 'react';
import './resume.css';
import ResumeCard from './ResumeCard';

import ExpirienceData from './ExpirienceData';


const Resume = () => {
  return (
    <div className="resume section container" id="resume">
      <h2 className="section_title">Experience</h2>

      <div className="resume_container grid">

        <div className="timeline grid">
          {ExpirienceData.map((value, index) => {
            if (value.category === "education") {
              return (
                <ResumeCard key={index} {...value} />
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {ExpirienceData.map((value, index) => {
            if (value.category === "experience") {
              return (
                <ResumeCard key={index} {...value} />
              )
            }
          })}
        </div>


      </div>

      {/* <div className="resume_container grid">
        {ExpirienceData.map((value, index) => {
          if (value.category === "experience") {
            return (
              <ResumeCard key={index} {...value} />
            )
          }
        })}
      </div> */}

    </div>
  )
}

export default Resume