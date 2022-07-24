import React from 'react'

import './sidebar.css'
// import Logo from './../../assets/logo-f.svg'

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <a href="#home" className="nav_logo">
        {/* <img src={Logo} alt="F" /> */}
        <span className="text">F.</span>
      </a>

      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">

            <li className="nav_item">
              <a href="#home" className="nav_link">
                {/* <i className="icon-home"></i> */}
                <i className="fa-solid fa-house-chimney"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                {/* <i className="icon-user-following"></i> */}
                <i className="fa-solid fa-user-tie"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#services" className="nav_link">
                {/* <i className="icon-briefcase"></i> */}
                <i className="fa-solid fa-briefcase"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#resume" className="nav_link">
                {/* <i className="icon-graduation"></i> */}
                <i className="fa-solid fa-graduation-cap"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#portfolio" className="nav_link">
                {/* <i className="icon-layers"></i> */}
                <i className="fa-solid fa-layer-group"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#blog" className="nav_link">
                {/* <i className="icon-note"></i> */}
                <i className="fa-solid fa-clipboard"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                {/* <i className="icon-bubble"></i> */}
                <i className="fa-solid fa-message"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      <div className="nav_footer">
        <span className="copy_text">&copy; 2022 - 2023</span>
      </div>
    </aside>
  )
}

export default Sidebar