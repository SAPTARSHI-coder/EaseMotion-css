import React, { useState, useEffect, useRef } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Staggered Text Reveal
 * ============================================================================
 * 
 * Replaces expensive GSAP SplitText logic with native CSS variables!
 * We split the text into an array of words and characters, wrap each in a 
 * <span>, and pass the character's index as a CSS Variable. 
 * 
 * CSS `calc()` multiplies this index by a delay multiplier, causing 
 * a flawless hardware-accelerated cascading wave animation natively on the GPU!
 */

export const StaggeredText = ({ 
  text, 
  staggerDelay = 0.03, /* The delay increment per character (seconds) */
  className = "",
  triggerOnHover = false 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // If not triggerOnHover, we use IntersectionObserver to trigger on scroll!
  useEffect(() => {
    if (triggerOnHover) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [triggerOnHover]);

  // We must split the text into words first to preserve natural wrapping
  // and then into individual characters!
  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <div 
      className={`ease-staggered-wrapper ${isVisible ? 'is-revealed' : ''} ${className}`}
      ref={containerRef}
      onMouseEnter={() => triggerOnHover && setIsVisible(true)}
      onMouseLeave={() => triggerOnHover && setIsVisible(false)}
      style={{ '--stagger-delay': `${staggerDelay}s` }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="ease-staggered-word">
          {word.split("").map((char, charIndex) => {
            // We assign a global index so the wave continues seamlessly across words!
            const currentIndex = globalCharIndex++;
            return (
              <span 
                key={currentIndex} 
                className="ease-staggered-char"
                style={{ '--char-index': currentIndex }}
              >
                {char}
              </span>
            );
          })}
          {/* Add a non-breaking space after each word except the last one */}
          {wordIndex < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </div>
  );
};

export default StaggeredText;
