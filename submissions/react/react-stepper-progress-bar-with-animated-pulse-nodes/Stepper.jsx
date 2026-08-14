import React, { useState, useEffect } from 'react';

/**
 * Stepper Progress Bar Component
 * 
 * @param {Array} steps - Array of string labels for each step
 * @param {Number} currentStep - The currently active step (1-indexed)
 * @param {Function} onStepClick - Optional callback when a step node is clicked
 */
const Stepper = ({ steps = [], currentStep = 1, onStepClick }) => {
  // We use a local state to track the *previously* active step.
  // This allows us to animate the progress bar width smoothly between steps.
  const [prevStep, setPrevStep] = useState(currentStep);

  useEffect(() => {
    if (currentStep !== prevStep) {
      // Small delay to allow CSS transitions to catch up if jumping multiple steps
      const timer = setTimeout(() => setPrevStep(currentStep), 50);
      return () => clearTimeout(timer);
    }
  }, [currentStep, prevStep]);

  // Calculate the width of the active progress line
  const calculateProgressWidth = () => {
    if (steps.length <= 1) return 0;
    // We want the line to go from the center of the first node to the center of the active node.
    const percentage = ((currentStep - 1) / (steps.length - 1)) * 100;
    return Math.max(0, Math.min(percentage, 100)); // Clamp between 0 and 100
  };

  return (
    <div className="ease-stepper-container" aria-label="Progress">
      <div className="ease-stepper-track-container">
        {/* Background track (inactive) */}
        <div className="ease-stepper-track-bg"></div>
        
        {/* Foreground track (active, animating) */}
        <div 
          className="ease-stepper-track-fill" 
          style={{ width: `${calculateProgressWidth()}%` }}
        ></div>
      </div>

      <div className="ease-stepper-nodes">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          
          let stateClass = '';
          if (isCompleted) stateClass = 'is-completed';
          if (isActive) stateClass = 'is-active';

          return (
            <div 
              key={stepNumber} 
              className={`ease-stepper-node-wrapper ${stateClass}`}
            >
              <button 
                className="ease-stepper-node"
                onClick={() => onStepClick && onStepClick(stepNumber)}
                aria-current={isActive ? 'step' : undefined}
                disabled={!onStepClick} // Disable interaction if no callback provided
              >
                {/* The inner pulse ring for the active state */}
                {isActive && <span className="ease-stepper-pulse"></span>}
                
                {/* Checkmark for completed steps, or the number */}
                {isCompleted ? (
                  <svg className="ease-stepper-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <span className="ease-stepper-number">{stepNumber}</span>
                )}
              </button>
              
              <span className="ease-stepper-label">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
