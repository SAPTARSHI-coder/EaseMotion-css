import React, { useState } from 'react';
import './style.css';

const Card = ({ title = "Default Title" }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            className="ease-rubberband card-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2>{title}</h2>
            <p>Hover status: {isHovered ? "Hovered!" : "Normal"}</p>
        </div>
    );
};
export default Card;