import React, { useState, useEffect } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Flip Clock
 * ============================================================================
 * 
 * Simulates a mechanical airport split-flap display using pure CSS 3D transforms.
 * By splitting numbers into top and bottom halves and utilizing `preserve-3d`, 
 * we avoid rendering complex HTML5 Canvas libraries!
 */

const FlipUnit = ({ currentNumber, previousNumber }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    // Whenever the number changes, we trigger the flip animation!
    if (currentNumber !== previousNumber) {
      setIsFlipping(true);
      // Reset the animation state right after the CSS transition finishes
      const timer = setTimeout(() => setIsFlipping(false), 600);
      return () => clearTimeout(timer);
    }
  }, [currentNumber, previousNumber]);

  return (
    <div className={`ease-flip-unit ${isFlipping ? 'is-flipping' : ''}`}>
      
      {/* 
        1. The Static Background 
        These stay still and show the "next" number that will be revealed 
        when the front flap falls away.
      */}
      <div className="flip-card card-top-static">
        <span>{currentNumber}</span>
      </div>
      <div className="flip-card card-bottom-static">
        <span>{previousNumber}</span>
      </div>

      {/* 
        2. The Animated Flap
        This is a 3D preserved container that actually rotates.
      */}
      <div className="flip-flap">
        {/* Front of the flap: The top half of the OLD number falling down */}
        <div className="flip-card flap-front">
          <span>{previousNumber}</span>
        </div>
        
        {/* Back of the flap: The bottom half of the NEW number revealing itself! */}
        <div className="flip-card flap-back">
          <span>{currentNumber}</span>
        </div>
      </div>

    </div>
  );
};

export const FlipClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUnit = (num) => num.toString().padStart(2, '0');

  const currentHours = formatUnit(time.getHours());
  const currentMinutes = formatUnit(time.getMinutes());
  const currentSeconds = formatUnit(time.getSeconds());

  // We need to calculate the previous state so the flaps have something to fold away from!
  const prevTime = new Date(time.getTime() - 1000);
  const prevHours = formatUnit(prevTime.getHours());
  const prevMinutes = formatUnit(prevTime.getMinutes());
  const prevSeconds = formatUnit(prevTime.getSeconds());

  return (
    <div className="ease-flip-clock-container">
      <div className="clock-group">
        <FlipUnit currentNumber={currentHours[0]} previousNumber={prevHours[0]} />
        <FlipUnit currentNumber={currentHours[1]} previousNumber={prevHours[1]} />
      </div>
      <span className="clock-divider">:</span>
      
      <div className="clock-group">
        <FlipUnit currentNumber={currentMinutes[0]} previousNumber={prevMinutes[0]} />
        <FlipUnit currentNumber={currentMinutes[1]} previousNumber={prevMinutes[1]} />
      </div>
      <span className="clock-divider">:</span>
      
      <div className="clock-group">
        <FlipUnit currentNumber={currentSeconds[0]} previousNumber={prevSeconds[0]} />
        <FlipUnit currentNumber={currentSeconds[1]} previousNumber={prevSeconds[1]} />
      </div>
    </div>
  );
};

export default FlipClock;
