import React, { useState } from 'react';
import './style.css';

const Sidebar = ({ title = "Default Title" }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            className="ease-pop sidebar-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2>{title}</h2>
            <p>Hover status: {isHovered ? "Hovered!" : "Normal"}</p>
        </div>
    );
};
export default Sidebar;