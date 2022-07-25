import React from 'react';

const SkillCard = (props) => {
    const { name, parcent, progresColor } = props.data;

    const cardStyle = {
        background: progresColor,
        width: parcent
    };

    return (
        <div className="skill_card">
            <div className="skill_title">
                <h3 className="skill_name">{name}</h3>
                <span className="skill_parcent">{parcent}</span>
            </div>
            <div className="skill_progres_bar">
                <div className="skill_progres" style={cardStyle}></div>
            </div>
        </div>
    )
}

export default SkillCard