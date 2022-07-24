import React from 'react'

const AboutBox = () => {
    return (
        <div className="about_boxes grid">

            <div className="about_box">
                <i className="about_box_icon fa-solid fa-thumbs-up"></i>

                <div className="about_box_text">
                    <h4 className="about_box_title">120+</h4>
                    <p className="about_box_description">Project Completed</p>
                </div>
            </div>

            <div className="about_box">
                <i className="about_box_icon fa-solid fa-mug-hot"></i>

                <div className="about_box_text">
                    <h4 className="about_box_title">5220+</h4>
                    <p className="about_box_description">Cup Of Coffee</p>
                </div>
            </div>

            <div className="about_box">
                <i className="about_box_icon fa-solid fa-users"></i>

                <div className="about_box_text">
                    <h4 className="about_box_title">220+</h4>
                    <p className="about_box_description">Satisfied Client</p>
                </div>
            </div>

            <div className="about_box">
                <i className="about_box_icon fa-solid fa-award"></i>

                <div className="about_box_text">
                    <h4 className="about_box_title">30+</h4>
                    <p className="about_box_description">Awards Winner</p>
                </div>
            </div>


        </div>
    )
}

export default AboutBox