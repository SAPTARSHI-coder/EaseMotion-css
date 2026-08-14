import React, { useState, useRef } from 'react';

/**
 * FeatureMatrixGrid Component
 * Renders a grid of feature comparison cards with cursor-tracking radial glow effects
 * and smooth EaseMotion animation classes.
 * 
 * @param {Object} props
 * @param {Array} props.features - Array of feature objects: { id, title, desc, tag, icon, metrics }
 * @param {number} [props.columns=3] - Number of columns in grid (1-4)
 * @param {string} [props.glowColor='rgba(139, 92, 246, 0.15)'] - Radial glow shadow color
 * @param {boolean} [props.animateOnLoad=true] - Appends entrance animations on render
 */
export default function FeatureMatrixGrid({
  features = [],
  columns = 3,
  glowColor = 'rgba(139, 92, 246, 0.15)',
  animateOnLoad = true
}) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [activeCardId, setActiveCardId] = useState(null);
  const containerRef = useRef(null);

  // Handle cursor moves to track coordinates relative to the card bounds
  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCoords({ x, y });
    setActiveCardId(id);
  };

  const handleMouseLeave = () => {
    setActiveCardId(null);
  };

  // Determine grid column layout class name
  const getGridColsClass = () => {
    switch (columns) {
      case 1: return 'ease-grid-cols-1';
      case 2: return 'ease-grid-cols-2';
      case 4: return 'ease-grid-cols-4';
      case 3:
      default:
        return 'ease-grid-cols-3';
    }
  };

  return (
    <div className="feature-matrix-wrapper" ref={containerRef}>
      {/* Grid Container */}
      <div className={`ease-grid ${getGridColsClass()} ease-gap-6`}>
        {features.map((feature, index) => {
          const isActive = activeCardId === feature.id;
          const staggerDelayClass = `ease-delay-${(index % 5) * 100}`;
          
          return (
            <div
              key={feature.id || index}
              className={`feature-matrix-card ${
                animateOnLoad ? `ease-fade-in ${staggerDelayClass}` : ''
              } ease-hover-float`}
              onMouseMove={(e) => handleMouseMove(e, feature.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                padding: '2rem',
                backgroundColor: '#0b0f19',
                border: '1px solid #1f2937',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
            >
              {/* Radial Hover Glow Layer */}
              {isActive && (
                <div
                  className="card-radial-glow"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: 'none',
                    background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
                    transition: 'background 0.1s ease'
                  }}
                />
              )}

              {/* Card Contents */}
              <div className="card-inner-content" style={{ position: 'relative', zIndex: 2 }}>
                {/* Header info */}
                <div 
                  className="card-header-row" 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '1rem' 
                  }}
                >
                  <div 
                    className="feature-icon-wrapper" 
                    style={{ 
                      fontSize: '1.5rem',
                      color: '#8b5cf6'
                    }}
                  >
                    {feature.icon || '✦'}
                  </div>
                  {feature.tag && (
                    <span 
                      className="feature-badge" 
                      style={{ 
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(139, 92, 246, 0.15)',
                        color: '#a78bfa'
                      }}
                    >
                      {feature.tag}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 
                  className="feature-card-title" 
                  style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 700, 
                    margin: '0 0 0.5rem 0',
                    color: '#f9fafb'
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="feature-card-desc" 
                  style={{ 
                    fontSize: '0.9rem', 
                    color: '#9ca3af', 
                    margin: '0 0 1.5rem 0',
                    lineHeight: 1.6
                  }}
                >
                  {feature.desc}
                </p>

                {/* Metrics Footer */}
                {feature.metrics && (
                  <div 
                    className="feature-metrics-row" 
                    style={{ 
                      borderTop: '1px solid #1f2937', 
                      paddingTop: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline'
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: 700 }}>
                      Performance
                    </span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10b981' }}>
                      {feature.metrics}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
