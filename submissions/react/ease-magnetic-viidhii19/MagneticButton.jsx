import React, { useRef, useState } from 'react';

const MagneticButton = ({ children, className = '', strength = 30 }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    const x = (deltaX / width) * strength;
    const y = (deltaY / height) * strength;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={buttonRef}
      className={`ease-magnetic-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="ease-magnetic-content"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default MagneticButton;
