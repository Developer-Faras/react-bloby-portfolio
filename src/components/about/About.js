import React from 'react'
import './about.css'
import aboutImg from './../../assets/me.jpg'
import AboutBox from './AboutBox'

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

              <div className="skill_card">
                <div className="skill_title">
                  <h3 className="skill_name">HTML</h3>
                  <span className="skill_parcent">95%</span>
                </div>
                <div className="skill_progres_bar">
                  <div className="skill_progres" style={{ background: "rgb(255,209,92)", width: "95%" }}></div>
                </div>
              </div>

              <div className="skill_card">
                <div className="skill_title">
                  <h3 className="skill_name">CSS</h3>
                  <span className="skill_parcent">95%</span>
                </div>
                <div className="skill_progres_bar">
                  <div className="skill_progres" style={{ background: "rgb(255,76,96)", width: "95%" }}></div>
                </div>
              </div>

              <div className="skill_card">
                <div className="skill_title">
                  <h3 className="skill_name">REACT</h3>
                  <span className="skill_parcent">70%</span>
                </div>
                <div className="skill_progres_bar">
                  <div className="skill_progres" style={{ background: "rgb(255,0,80)", width: "70%" }}></div>
                </div>
              </div>


              <div className="skill_card">
                <div className="skill_title">
                  <h3 className="skill_name">PHP</h3>
                  <span className="skill_parcent">85%</span>
                </div>
                <div className="skill_progres_bar">
                  <div className="skill_progres" style={{ background: "rgb(255,0,80)", width: "85%" }}></div>
                </div>
              </div>


            </div>
          </div>
        </div>



      </div>

      <AboutBox />
    </section>
  )
}

export default About