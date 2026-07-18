import React, { useState, useEffect } from 'react';
import './style.css';

/**
 * JelloFAB Component
 * 
 * A Floating Action Button (FAB) that performs a 'jello' entrance animation
 * when it mounts, demonstrating a playful entrance effect.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - The icon or content inside the FAB
 * @param {string} props.label - Accessible label for screen readers
 * @param {Function} props.onClick - Click handler
 * @param {string} [props.position='bottom-right'] - Placement (e.g., 'bottom-right', 'bottom-left')
 */
const JelloFAB = ({ 
  icon, 
  label, 
  onClick, 
  position = 'bottom-right' 
}) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // The animation is triggered immediately on mount via CSS class.
    // We remove the animation class after it finishes so it doesn't replay on re-renders,
    // though the 'forwards' fill-mode keeps it in the final state anyway.
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 900); // 900ms matches the animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      type="button"
      className={`fab-ag fab-${position}-ag ${isAnimating ? 'ease-jello-in-ag' : ''}`}
      onClick={onClick}
      aria-label={label}
    >
      <span className="fab-icon-ag" aria-hidden="true">
        {icon || '+'}
      </span>
    </button>
  );
};

export default JelloFAB;
