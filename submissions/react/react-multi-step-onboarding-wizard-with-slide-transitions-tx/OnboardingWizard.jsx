import React, { useState, useEffect } from 'react';
import './style.css';

const OnboardingWizard = ({ steps, onComplete, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState('forward');
  const [isAnimating, setIsAnimating] = useState(false);

  // Guard against empty steps
  if (!steps || steps.length === 0) return null;

  const isLastStep = currentStep === steps.length - 1;
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (isAnimating || isLastStep) return;
    setDirection('forward');
    setIsAnimating(true);
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating || currentStep === 0) return;
    setDirection('backward');
    setIsAnimating(true);
    setCurrentStep((prev) => prev - 1);
  };

  const handleComplete = () => {
    if (onComplete) onComplete();
  };

  // Reset animation flag after transition completes
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 400); // Matches CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating, currentStep]);

  const activeStepData = steps[currentStep];

  return (
    <div className="wizard-container ease-fade-in">
      <div className="wizard-header">
        <div className="wizard-progress-bar">
          <div 
            className="wizard-progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="wizard-actions-top">
          {onSkip && !isLastStep && (
            <button className="wizard-btn-skip ease-hover-lift" onClick={onSkip}>
              Skip
            </button>
          )}
        </div>
      </div>

      <div className="wizard-body">
        <div className="wizard-slides-wrapper">
          {/* We map over steps to keep them in DOM for clean CSS transitions, 
              or just render current step with a key to trigger CSS animations.
              Rendering current with a key is cleaner for React. */}
          <div 
            key={currentStep} 
            className={`wizard-slide ease-fade-in ${direction === 'forward' ? 'slide-in-right' : 'slide-in-left'}`}
          >
            {activeStepData.image && (
              <div className="wizard-image-container ease-float">
                <img src={activeStepData.image} alt={activeStepData.title} className="wizard-image" />
              </div>
            )}
            <h2 className="wizard-title">{activeStepData.title}</h2>
            <p className="wizard-description">{activeStepData.description}</p>
            
            {activeStepData.content && (
              <div className="wizard-custom-content">
                {activeStepData.content}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="wizard-footer">
        <div className="wizard-indicators">
          {steps.map((_, idx) => (
            <span 
              key={idx} 
              className={`wizard-dot ${idx === currentStep ? 'active ease-pulse' : ''}`}
            ></span>
          ))}
        </div>

        <div className="wizard-controls">
          <button 
            className="wizard-btn-secondary ease-hover-lift" 
            onClick={handlePrev}
            disabled={currentStep === 0 || isAnimating}
          >
            Back
          </button>
          
          {isLastStep ? (
            <button 
              className="wizard-btn-primary ease-hover-lift" 
              onClick={handleComplete}
              disabled={isAnimating}
            >
              Get Started
            </button>
          ) : (
            <button 
              className="wizard-btn-primary ease-hover-lift" 
              onClick={handleNext}
              disabled={isAnimating}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;
