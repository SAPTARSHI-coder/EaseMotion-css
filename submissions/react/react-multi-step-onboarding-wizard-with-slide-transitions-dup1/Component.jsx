import React, { useState } from 'react';
import './style.css';

const Component = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="ease-slide-up react-component">
      <p>React component initialized.</p>
      <button onClick={() => setIsVisible(false)} className="ease-hover-lift">Close</button>
    </div>
  );
};

export default Component;
