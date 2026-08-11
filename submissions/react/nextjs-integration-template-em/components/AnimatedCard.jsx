import React from 'react';

/**
 * AnimatedCard Component
 * Showcases EaseMotion hover lifts, scaling, and entry transitions.
 * 
 * @param {Object} props
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 * @param {string} props.icon - Emoji or icon element
 * @param {number} props.delay - Animation delay multiplier
 * @param {string} props.badge - Optional accent label
 */
export default function AnimatedCard({ title, description, icon, delay = 0, badge }) {
  const delayStyle = {
    animationDelay: `${delay * 150}ms`,
  };

  return (
    <div 
      className="glass-panel ease-fade-in ease-hover-lift" 
      style={{
        ...delayStyle,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        cursor: 'pointer',
        transition: 'border-color var(--ease-speed-fast) var(--ease-ease)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div 
          className="ease-bounce"
          style={{ 
            fontSize: '28px', 
            background: 'rgba(14, 165, 233, 0.1)', 
            padding: '8px 12px', 
            borderRadius: '12px',
            width: 'fit-content'
          }}
        >
          {icon}
        </div>
        {badge && (
          <span 
            style={{
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              background: 'linear-gradient(135deg, var(--ease-color-primary) 0%, var(--ease-color-secondary) 100%)',
              color: '#ffffff',
              padding: '4px 10px',
              borderRadius: '20px',
            }}
          >
            {badge}
          </span>
        )}
      </div>
      
      <h3 style={{ margin: '8px 0 0 0', fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600 }}>
        {title}
      </h3>
      
      <p style={{ margin: 0, color: 'var(--app-text-muted)', fontSize: '14px', lineHeight: 1.5 }}>
        {description}
      </p>
    </div>
  );
}
