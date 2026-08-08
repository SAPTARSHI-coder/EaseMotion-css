import React from 'react';
import './style.css';

export default function StepperProgressBar({
  steps,
  currentStep = 0,
  orientation = 'horizontal',
}) {
  return (
    <div 
      className={`ease-stepper ease-stepper--${orientation}`}
      role="progressbar" 
      aria-valuenow={currentStep} 
      aria-valuemin={0} 
      aria-valuemax={steps.length - 1}
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        
        return (
          <div 
            key={index} 
            className={`ease-stepper__step ${isActive ? 'ease-stepper__step--active' : ''} ${isCompleted ? 'ease-stepper__step--completed' : ''}`}
          >
            <div className="ease-stepper__node-container">
              <div className="ease-stepper__node ease-pulse-border-emphasis">
                {isCompleted ? (
                  <svg className="ease-stepper__icon ease-scale-in" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <span className="ease-stepper__index">{index + 1}</span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="ease-stepper__line-track">
                  <div className="ease-stepper__line-fill"></div>
                </div>
              )}
            </div>
            
            <div className="ease-stepper__content">
              <h4 className="ease-stepper__title">{step.title}</h4>
              {step.description && (
                <p className="ease-stepper__description">{step.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
