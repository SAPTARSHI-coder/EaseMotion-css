import React, { useState } from 'react';
import './style.css';

const Avatar = ({ title = "Default Title" }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            className="ease-zoomout avatar-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2>{title}</h2>
            <p>Hover status: {isHovered ? "Hovered!" : "Normal"}</p>
        </div>
    );
};
export default Avatar;