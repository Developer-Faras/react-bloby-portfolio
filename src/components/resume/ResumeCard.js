import React from 'react';

const ResumeCard = (props) => {
    const { icon, year, title, desc } = props;

    return (
        <div className="resume_card">
            <i className={`icon fa-solid ${icon}`} ></i>

            <p className="timeline_year">{year}</p>
            <h3 className="timeline_title">{title}</h3>
            <p className="timeline_description">{desc}</p>
        </div>
    )
}

export default ResumeCard