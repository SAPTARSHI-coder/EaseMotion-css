import React from 'react';

/**
 * Stepper Progress Bar with Animated Pulse Nodes
 * 
 * @param {Array} steps - Array of strings or objects representing the labels for each step.
 * @param {Number} currentStep - The index (0-based) of the current active step.
 */
const StepperProgress = ({ steps = [], currentStep = 0 }) => {
  
  // Calculate the percentage of the progress line to fill
  const progressPercentage = steps.length > 1 
    ? (currentStep / (steps.length - 1)) * 100 
    : 0;

  return (
    <div className="ease-stepper-container">
      {/* The background track and the animated progress fill line */}
      <div className="ease-stepper-track-wrapper">
        <div className="ease-stepper-track-bg"></div>
        <div 
          className="ease-stepper-track-fill" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* The Nodes (Circles) */}
      <div className="ease-stepper-nodes">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const isPending = index > currentStep;
          
          let stateClass = '';
          if (isCompleted) stateClass = 'is-completed';
          if (isActive) stateClass = 'is-active';
          if (isPending) stateClass = 'is-pending';

          const label = typeof step === 'string' ? step : step.label;

          return (
            <div key={index} className={`ease-stepper-node-wrapper ${stateClass}`}>
              {/* Active Pulse Ring (Only visible when isActive) */}
              {isActive && <div className="ease-stepper-pulse-ring"></div>}
              
              {/* The solid circle node */}
              <div className="ease-stepper-circle">
                {isCompleted ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              
              {/* The Step Label below the node */}
              <div className="ease-stepper-label">{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepperProgress;
