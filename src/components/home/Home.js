import React from 'react'

import HeaderSosials from './HeaderSosials'
import ScrollDown from './ScrollDown'

import './home.css'

import heroImg from './../../assets/avatar-1.svg'
import Shapes from './Shapes'


const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={heroImg} alt="Hero Img" />

        <h1 className="home_name">Md Faras Uddin</h1>

        <p className="home_education">I'm a frontend developer.</p>

        <HeaderSosials />

        <a href="#test" className="btn">Hire Me</a>

      </div>

      <ScrollDown />
      <Shapes />
    </section>
  )
}

export default Home