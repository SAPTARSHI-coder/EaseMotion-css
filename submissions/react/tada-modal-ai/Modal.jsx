import React, { useState } from 'react';
import './style.css';

const Modal = ({ title = "Default Title" }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            className="ease-tada modal-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2>{title}</h2>
            <p>Hover status: {isHovered ? "Hovered!" : "Normal"}</p>
        </div>
    );
};
export default Modal;