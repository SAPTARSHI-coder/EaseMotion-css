import React, { useState, useEffect, useRef } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated 3D Card Stack
 * ============================================================================
 * 
 * Replaces expensive scroll libraries (like GSAP ScrollTrigger).
 * We track the scroll position of a sticky container using native JS.
 * We map that scroll progress from 0 to 1, and pass it directly to CSS Variables.
 * CSS handles all the heavy lifting (scaling and translating the cards)!
 */

export const CardStack = ({ cards = [] }) => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      // Use requestAnimationFrame to decouple the scroll event from React re-renders!
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      
      animationFrameId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        
        // Calculate how far down the sticky wrapper we have scrolled
        const { top, height } = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // The container height is much larger than the window to allow scrolling
        // We calculate the progress from 0 (top reached) to 1 (bottom reached)
        const totalScrollableDistance = height - windowHeight;
        
        // top is negative when scrolling down
        const scrolled = -top;
        
        let progress = scrolled / totalScrollableDistance;
        
        // Clamp between 0 and 1
        progress = Math.max(0, Math.min(1, progress));
        
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    /* 
      The parent container is artificially tall (e.g. 300vh).
      This forces the browser to create a scrollbar so we can scrub through the animation!
    */
    <div className="ease-stack-wrapper" ref={containerRef}>
      
      {/* 
        The sticky container locks the cards to the center of the screen 
        while the parent wrapper scrolls past it.
      */}
      <div className="ease-sticky-container">
        
        <div className="ease-card-stack">
          {cards.map((card, index) => {
            // Calculate when this specific card should start dropping in based on its index
            const cardsCount = cards.length;
            
            // This math ensures cards drop in sequentially as scrollProgress goes 0 -> 1
            const dropInStart = index / cardsCount;
            const dropInEnd = (index + 1) / cardsCount;
            
            // Map the global scrollProgress (0 to 1) to this card's local progress (0 to 1)
            let cardProgress = (scrollProgress - dropInStart) / (dropInEnd - dropInStart);
            cardProgress = Math.max(0, Math.min(1, cardProgress));
            
            // The first card is always fully down
            if (index === 0) cardProgress = 1;

            return (
              <div 
                key={index} 
                className="ease-stack-card"
                style={{
                  // Pass the calculated progress natively to CSS!
                  '--card-progress': cardProgress,
                  '--card-index': index,
                  '--total-cards': cardsCount,
                  backgroundColor: card.color || '#1e293b'
                }}
              >
                <div className="card-content">
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      
    </div>
  );
};

export default CardStack;
