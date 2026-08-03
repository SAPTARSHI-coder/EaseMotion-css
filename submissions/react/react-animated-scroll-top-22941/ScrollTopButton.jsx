import React, { useState, useEffect, useCallback } from 'react';

const ScrollTopButton = ({ 
  threshold = 300, 
  smooth = true,
  position = 'bottom-right',
  icon
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const checkScroll = useCallback(() => {
    if (!isMounted && window.scrollY > threshold) {
      setIsMounted(true);
      setIsVisible(true);
      setIsExiting(false);
    } else if (isMounted && isVisible && window.scrollY <= threshold) {
      setIsVisible(false);
      setIsExiting(true);
    }
  }, [threshold, isMounted, isVisible]);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll, { passive: true });
    // Check on initial load
    checkScroll();
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto'
    });
  };

  const handleAnimationEnd = (e) => {
    if (isExiting && e.animationName.includes('ease-slide-down')) {
      setIsMounted(false);
      setIsExiting(false);
    }
  };

  if (!isMounted) return null;

  // Compute animation classes based on state
  let animationClass = 'ease-slide-up';
  if (isExiting) {
    animationClass = 'ease-slide-down';
  }

  return (
    <button
      className={`scroll-top-btn pos-${position} ${animationClass} ease-hover-scale`}
      onClick={scrollToTop}
      onAnimationEnd={handleAnimationEnd}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      {icon || (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      )}
    </button>
  );
};

export default ScrollTopButton;
