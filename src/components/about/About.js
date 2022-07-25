import React from 'react'

import aboutImg from './../../assets/me.jpg'

import './about.css'

import AboutBox from './AboutBox'
import SkillCard from './SkillCard'

const skillData = [
  {
    name: "HTML",
    parcent: "95%",
    progresColor: 'rgb(255,209,92)'
  },
  {
    name: "CSS",
    parcent: "95%",
    progresColor: 'rgb(255,76,96)'
  },
  {
    name: "React Js",
    parcent: "80%",
    progresColor: 'rgb(81 152 253)'
  },
  {
    name: "PHP",
    parcent: "85%",
    progresColor: 'rgb(255,0,80)'
  }
]

const aboutBoxData = [
  {
    icon: 'fa-thumbs-up',
    title: '120+',
    description: 'Project Completed'
  },
  {
    icon: 'fa-mug-hot',
    title: '5220+',
    description: 'Cup Of Coffee'
  },
  {
    icon: 'fa-users',
    title: '220+',
    description: 'Satisfied Client'
  },
  {
    icon: 'fa-award',
    title: '30+',
    description: 'Awards Winner'
  },
]


const About = () => {
  return (
    <section className="section about container" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={`${aboutImg}`} alt="About Avatar" className='about_img' />

        <div className="about_data grid">

          <div className="about_info">

            <h2 className="about_name">Md Faras Uddin</h2>
            <p className="about_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore at deserunt excepturi veritatis quae aliquam. Repellendus inventore aliquid non eos soluta aperiam in quasi cum, explicabo facere officia, vero incidunt, velit hic dicta. Corporis perspiciatis voluptatum necessitatibus consequatur possimus?</p>

            <a href="#download" className="btn cv_btn">Download CV</a>
          </div>

          <div className="about_skills ">
            <div className="skill_data grid">
              {skillData.map((skill, index) => <SkillCard key={index} data={skill} />)}
            </div>
          </div>
        </div>



      </div>

      <div className="about_boxes grid">
        {aboutBoxData.map((data, index) => <AboutBox key={index} data={data} />)}
      </div>
    </section>
  )
}

export default About