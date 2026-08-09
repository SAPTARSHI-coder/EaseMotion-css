import React, { useState, useEffect } from 'react';
import './style.css';

/**
 * ZoomCard
 * 
 * A React component representing a card that supports an animated exit (zoom out).
 * When `isVisible` prop becomes false, the component applies an exit animation before unmounting/hiding.
 * 
 * @param {Object} props
 * @param {boolean} props.isVisible - Controls whether the card is shown. Set to false to trigger exit animation.
 * @param {Function} [props.onExited] - Callback fired when the exit animation completes.
 * @param {React.ReactNode} props.children - Card content.
 */
const ZoomCard = ({ 
  isVisible = true, 
  onExited,
  children,
  ...props 
}) => {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setIsAnimatingOut(false);
    } else if (shouldRender) {
      // Trigger exit animation
      setIsAnimatingOut(true);
    }
  }, [isVisible, shouldRender]);

  const handleAnimationEnd = (e) => {
    // Only respond to our specific exit animation
    if (e.animationName === 'cardZoomOut-ag' || e.animationName === 'cardFadeOutFallback-ag') {
      if (isAnimatingOut) {
        setShouldRender(false);
        if (onExited) onExited();
      }
    }
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`ease-zoom-card-ag ${isAnimatingOut ? 'exiting-ag' : ''}`} 
      onAnimationEnd={handleAnimationEnd}
      aria-hidden={isAnimatingOut}
      {...props}
    >
      {children}
    </div>
  );
};

export default ZoomCard;
