import React, { useState, useEffect, useRef } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Dynamic Island
 * ============================================================================
 * 
 * Replaces expensive Framer Motion layout animations.
 * We use a single React state boolean (`isExpanded`) and handle all the 
 * complex shape morphing, spring physics, and content fading natively 
 * via orchestrated CSS transitions!
 */

export const DynamicIsland = ({ 
  compactContent, 
  expandedContent 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const islandRef = useRef(null);

  // Close the island if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (islandRef.current && !islandRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };
    
    // Use mousedown instead of click to feel more responsive like iOS
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="ease-island-wrapper">
      <div 
        ref={islandRef}
        className={`ease-dynamic-island ${isExpanded ? 'is-expanded' : ''}`}
        onClick={() => setIsExpanded(true)}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
      >
        
        {/* 
          The Compact State (Small Pill)
          We fade this OUT when expanded.
        */}
        <div className="island-content-compact">
          {compactContent || (
            <div className="default-compact">
              <div className="status-dot"></div>
              <span>System Active</span>
            </div>
          )}
        </div>

        {/* 
          The Expanded State (Large Card)
          We fade this IN when expanded, but we delay the fade until 
          the island has finished physically growing!
        */}
        <div className="island-content-expanded">
          {expandedContent || (
            <div className="default-expanded">
              <div className="expanded-header">
                <div className="status-icon">♪</div>
                <div className="track-info">
                  <strong>Currently Playing</strong>
                  <span>EaseMotion Lo-Fi Beats</span>
                </div>
              </div>
              <div className="audio-wave">
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default DynamicIsland;
