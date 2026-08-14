import React, { useState } from 'react';

/**
 * MultiStepOnboardingWizard Component
 * Renders a step-by-step onboarding wizard with slide transition animations
 * and a top progress status bar.
 * 
 * @param {Object} props
 * @param {Array} props.steps - Array of steps objects: { title, subtitle, renderContent }
 * @param {Function} [props.onComplete] - Triggered when completing the last step
 * @param {Function} [props.onCancel] - Triggered when cancelling the wizard
 * @param {string} [props.accentColor='#8b5cf6'] - Highlight and buttons color
 */
export default function MultiStepOnboardingWizard({
  steps = [],
  onComplete,
  onCancel,
  accentColor = '#8b5cf6'
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next'); // next | prev
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    if (currentStep < steps.length - 1) {
      setSlideDirection('next');
      setIsTransitioning(true);
      
      // Delay state updates to trigger transitions smoothly
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsTransitioning(false);
      }, 350);
    } else {
      if (onComplete) onComplete();
    }
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    if (currentStep > 0) {
      setSlideDirection('prev');
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setIsTransitioning(false);
      }, 350);
    }
  };

  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  // Select appropriate sliding animation class
  const getAnimationClass = () => {
    if (isTransitioning) {
      return slideDirection === 'next' ? 'ease-slide-out-left' : 'ease-slide-out-right';
    }
    return slideDirection === 'next' ? 'ease-slide-in-right' : 'ease-slide-in-left';
  };

  if (steps.length === 0) return null;

  return (
    <div
      className="wizard-container"
      style={{
        maxWidth: '580px',
        margin: '0 auto',
        backgroundColor: '#0b0f19',
        border: '1px solid #1f2937',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Top Progress Bar */}
      <div 
        className="wizard-progress-track"
        style={{ 
          height: '4px', 
          width: '100%', 
          backgroundColor: '#1f2937', 
          position: 'relative' 
        }}
      >
        <div
          className="wizard-progress-bar"
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            backgroundColor: accentColor,
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>

      {/* Wizard Header info */}
      <div 
        className="wizard-header" 
        style={{ 
          padding: '2rem 2.5rem 1rem 2.5rem', 
          borderBottom: '1px solid #1f2937',
          textAlign: 'left'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase' }}>
            Step {currentStep + 1} of {steps.length}
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f9fafb' }}>
            {Math.round(progressPercent)}% Done
          </span>
        </div>
        <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: '#f9fafb' }}>
          {steps[currentStep].title}
        </h4>
        {steps[currentStep].subtitle && (
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#9ca3af' }}>
            {steps[currentStep].subtitle}
          </p>
        )}
      </div>

      {/* Content Slider Stage */}
      <div 
        className="wizard-slider-stage" 
        style={{ 
          padding: '2.5rem', 
          minHeight: '220px', 
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div 
          className={getAnimationClass()}
          style={{ 
            height: '100%', 
            width: '100%',
            animationDuration: '0.35s',
            animationFillMode: 'both'
          }}
        >
          {steps[currentStep].renderContent()}
        </div>
      </div>

      {/* Footer Controls Row */}
      <div
        className="wizard-footer"
        style={{
          padding: '1.5rem 2.5rem',
          borderTop: '1px solid #1f2937',
          backgroundColor: '#030712',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <button
          onClick={currentStep === 0 ? onCancel : handlePrev}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '6px',
            border: '1px solid #1f2937',
            backgroundColor: 'transparent',
            color: '#9ca3af',
            fontWeight: 600,
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: 'color 0.2s ease'
          }}
        >
          {currentStep === 0 ? 'Cancel' : 'Back'}
        </button>

        <button
          onClick={handleNext}
          style={{
            padding: '0.5rem 1.5rem',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: accentColor,
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: 'opacity 0.2s ease'
          }}
        >
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>

      {/* Core slide timings styles declarations injected inline */}
      <style>{`
        .ease-slide-in-right {
          animation: slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .ease-slide-in-left {
          animation: slideInLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .ease-slide-out-right {
          animation: slideOutRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .ease-slide-out-left {
          animation: slideOutLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
