import React, { useRef, useEffect, useState } from 'react';
import './style.css';

/**
 * A highly performant React wrapper for infinite seamless CSS scrolling marquees.
 * Automatically duplicates children to ensure the container always stays filled 
 * without Javascript snapping or layout jumping.
 */
export const InfiniteMarquee = ({ 
  children, 
  speed = 30, // seconds to complete one full loop
  direction = 'left', // 'left' or 'right'
  pauseOnHover = true,
  gap = 32 // gap between items in px
}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [duplicateCount, setDuplicateCount] = useState(2); // Minimum 2 sets for a seamless loop

  // Dynamically calculate how many times we need to duplicate the content 
  // to ensure it fills massive ultrawide screens smoothly.
  useEffect(() => {
    const calculateDuplication = () => {
      if (!containerRef.current || !contentRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      // Get the true width of a single set of the children
      const contentWidth = contentRef.current.scrollWidth;
      
      if (contentWidth > 0) {
        // We need enough copies to fill the screen PLUS one extra to scroll off-screen seamlessly
        const requiredCopies = Math.ceil(containerWidth / contentWidth) + 1;
        // Always maintain at least 2 copies for the CSS animation math (translate -50%) to work
        setDuplicateCount(Math.max(2, requiredCopies));
      }
    };

    calculateDuplication();
    window.addEventListener('resize', calculateDuplication);
    return () => window.removeEventListener('resize', calculateDuplication);
  }, [children]);

  // The CSS animation expects exactly TWO large tracking wrappers: 
  // one that is currently on-screen, and one that is queued up behind it.
  // We chunk our duplications into two identical groups.
  const groupOne = Array.from({ length: Math.ceil(duplicateCount / 2) });
  const groupTwo = Array.from({ length: Math.ceil(duplicateCount / 2) });

  return (
    <div 
      className={`ease-marquee-container ${pauseOnHover ? 'pause-on-hover' : ''}`}
      ref={containerRef}
      style={{ '--marquee-gap': `${gap}px` }}
    >
      <div 
        className={`ease-marquee-track ${direction === 'right' ? 'marquee-reverse' : ''}`}
        style={{ '--marquee-speed': `${speed}s` }}
      >
        {/* Track Group 1 (The initial visible set) */}
        <div className="ease-marquee-content" ref={contentRef}>
          {groupOne.map((_, i) => (
            <React.Fragment key={`group1-${i}`}>
              {children}
            </React.Fragment>
          ))}
        </div>
        
        {/* Track Group 2 (The exact duplicate that follows seamlessly) */}
        <div className="ease-marquee-content" aria-hidden="true">
          {groupTwo.map((_, i) => (
            <React.Fragment key={`group2-${i}`}>
              {children}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
