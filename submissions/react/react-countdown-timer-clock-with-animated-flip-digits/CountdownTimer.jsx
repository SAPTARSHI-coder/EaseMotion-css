import React, { useState, useEffect, useRef } from 'react';

/**
 * Animated Flip Digit Component
 * Renders a single 3D flip card for a number
 */
const FlipDigit = ({ value, label }) => {
  // Pad the value with leading zero
  const valString = String(value).padStart(2, '0');
  const [currentVal, setCurrentVal] = useState(valString);
  const [nextVal, setNextVal] = useState(valString);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (valString !== currentVal) {
      setNextVal(valString);
      setIsFlipping(true);

      // Reset the flip animation class after halfway (when the flip visually completes)
      const timeout = setTimeout(() => {
        setCurrentVal(valString);
        setIsFlipping(false);
      }, 500); // 500ms matches our CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [valString, currentVal]);

  return (
    <div className="ease-flip-digit-group">
      <div className={`ease-flip-card ${isFlipping ? 'is-flipping' : ''}`}>
        {/* Top half showing the old value before flip, or new value after */}
        <div className="ease-flip-card-top">{currentVal}</div>
        
        {/* Bottom half showing the old value */}
        <div className="ease-flip-card-bottom">{currentVal}</div>
        
        {/* The physical flap that swings down */}
        <div className="ease-flip-flap ease-flip-flap-top">{currentVal}</div>
        <div className="ease-flip-flap ease-flip-flap-bottom">{nextVal}</div>
      </div>
      <div className="ease-flip-label">{label}</div>
    </div>
  );
};

/**
 * Countdown Timer Clock Component
 * 
 * @param {Date|String|Number} targetDate - The future date to count down to
 * @param {Function} onComplete - Optional callback when countdown reaches zero
 */
const CountdownTimer = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  
  // Reference to track if we've already fired the onComplete callback
  const hasCompleted = useRef(false);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        if (!hasCompleted.current) {
          hasCompleted.current = true;
          setIsExpired(true);
          if (onComplete) onComplete();
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Initialize state immediately
    setTimeLeft(calculateTimeLeft());

    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [targetDate, onComplete]);

  return (
    <div className={`ease-countdown-container ${isExpired ? 'is-expired' : ''}`}>
      <FlipDigit value={timeLeft.days} label="Days" />
      <span className="ease-countdown-separator">:</span>
      <FlipDigit value={timeLeft.hours} label="Hours" />
      <span className="ease-countdown-separator">:</span>
      <FlipDigit value={timeLeft.minutes} label="Minutes" />
      <span className="ease-countdown-separator">:</span>
      <FlipDigit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
