import React from 'react';

const ScrollDown = () => {
    return (
        <div className='scroll_down'>
            <a href="#about" className="scroll_wraper">
                <span className="scroll_text">Scroll Down</span>

                <span className="mouse">
                    <span className="wheel"></span>
                </span>
            </a>
        </div>
    );
}

export default ScrollDown;
