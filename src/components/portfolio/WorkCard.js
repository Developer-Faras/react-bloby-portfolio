import React from 'react';
const WorkCard = (props) => {
    const { image, title, category } = props;
    return (
        <div className="work_card">
            <div className="work_thumbnails">
                <img src={image} alt={title} />
                <div className="card_mask"></div>
            </div>

            <span className="work_catagory">{category}</span>
            <h3 className="work_title">{title}</h3>
            <a href="/asd" className="work_btn">
                {/* <i className="fa-solid fa-link"></i> */}
                Live Demo
            </a>
        </div>
    )
}

export default WorkCard