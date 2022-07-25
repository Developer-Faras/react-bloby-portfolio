import React from 'react';

const AboutBox = (props) => {
    const { icon, title, description } = props.data;

    return (

        <div className="about_box">
            <i className={`about_box_icon fa-solid ${icon}`}></i>

            <div className="about_box_text">
                <h4 className="about_box_title">{title}</h4>
                <p className="about_box_description">{description}</p>
            </div>
        </div>
    )
}

export default AboutBox