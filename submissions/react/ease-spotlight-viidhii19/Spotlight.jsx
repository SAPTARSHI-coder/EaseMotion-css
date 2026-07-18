import React, { useRef, useState, useEffect, createContext, useContext } from 'react';

const SpotlightContext = createContext({ x: 0, y: 0 });

export function SpotlightProvider({ children, className = '' }) {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <SpotlightContext.Provider value={mousePosition}>
      <div ref={containerRef} className={`ease-spotlight-provider ${className}`}>
        {children}
      </div>
    </SpotlightContext.Provider>
  );
}

export function SpotlightCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const mousePosition = useContext(SpotlightContext);
  const [cardPosition, setCardPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardPosition({
        x: mousePosition.x - rect.left,
        y: mousePosition.y - rect.top,
      });
    }
  }, [mousePosition]);

  return (
    <div
      ref={cardRef}
      className={`ease-spotlight-card ease-fade-in ${className}`}
      style={{
        '--mouse-x': `${cardPosition.x}px`,
        '--mouse-y': `${cardPosition.y}px`,
      }}
    >
      <div className="ease-spotlight-card-content">
        {children}
      </div>
    </div>
  );
}
