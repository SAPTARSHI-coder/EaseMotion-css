import React, { useState } from 'react';
import { Animate } from 'easemotion-react';

export default function OnboardingTour({ steps, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    else onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Animate 
        type="zoom-in" 
        // Using the key prop forces React to remount the component on step change, re-triggering the animation
        key={`tour-step-${currentStep}`} 
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
      >
        {/* Step Indicator */}
        <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
          {currentStep + 1}
        </div>

        <h2 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">{step.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {steps.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all ${i === currentStep ? 'w-6 bg-blue-600' : 'w-2 bg-gray-200'}`} />
            ))}
          </div>
          
          <div className="flex gap-2">
            <button onClick={onClose} className="px-4 py-2 text-gray-500 font-medium">Skip</button>
            <Animate tag="button" hover="lift" onClick={handleNext} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium">
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Animate>
          </div>
        </div>
      </Animate>
    </div>
  );
}
