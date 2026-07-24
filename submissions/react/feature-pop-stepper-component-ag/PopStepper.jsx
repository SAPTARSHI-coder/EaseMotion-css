import React, { useState } from "react";
import "./style.css";

const PopStepper = ({ steps = [], currentStep = 0, onStepClick }) => {
  return (
    <div className="pop-stepper-container-ag" role="navigation" aria-label="Progress Stepper">
      <div className="pop-stepper-ag">
        {steps.map((step, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;
          const statusText = isActive ? "current" : isCompleted ? "completed" : "upcoming";

          return (
            <React.Fragment key={idx}>
              {/* Connector line */}
              {idx > 0 && (
                <div 
                  className={`pop-stepper-line-ag ${isCompleted || isActive ? "active-line-ag" : ""}`}
                  aria-hidden="true"
                />
              )}
              
              {/* Step indicator */}
              <button
                className={`pop-stepper-step-ag ${isActive ? "active-step-ag" : ""} ${isCompleted ? "completed-step-ag" : ""}`}
                onClick={() => onStepClick && onStepClick(idx)}
                aria-current={isActive ? "step" : undefined}
                aria-label={`Step ${idx + 1}: ${step.label} (${statusText})`}
              >
                <div className="pop-stepper-node-ag">
                  {isCompleted ? "✓" : idx + 1}
                </div>
                <span className="pop-stepper-label-ag">{step.label}</span>
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default PopStepper;
