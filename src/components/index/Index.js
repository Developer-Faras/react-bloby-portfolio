import React from 'react'

// Import Components
import About from '../about/About'
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'
import Home from '../home/Home'
import Portfolio from '../portfolio/Portfolio'
import Pricing from '../pricing/Pricing'
import Resume from '../resume/Resume'
import Services from '../services/Services'
import Sidebar from '../sidebar/Sidebar'
import Testimonials from '../testimonials/Testimonials'

// Import Styles
import './index.css'

const Index = () => {
    return (
        <div className="body-container">
            <Sidebar />

            <div className="main-content">
                <Home />
                <About />
                <Services />
                <Resume />
                <Portfolio />
                <Pricing />
                <Testimonials />
                <Blog />
                <Contact />
            </div>
        </div>
    )
}

export default Index