import React, { useState } from "react";
import "./style.css";

const PopStepperRB = ({ steps = [], currentStep = 0, onStepClick }) => {
  return (
    <div className="pop-stepper-container-rb" role="navigation" aria-label="Progress Stepper">
      <div className="pop-stepper-rb">
        {steps.map((step, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;
          const statusText = isActive ? "current" : isCompleted ? "completed" : "upcoming";

          return (
            <React.Fragment key={idx}>
              {/* Connector line */}
              {idx > 0 && (
                <div 
                  className={`pop-stepper-line-rb ${isCompleted || isActive ? "active-line-rb" : ""}`}
                  aria-hidden="true"
                />
              )}
              
              {/* Step indicator */}
              <button
                className={`pop-stepper-step-rb ${isActive ? "active-step-rb" : ""} ${isCompleted ? "completed-step-rb" : ""}`}
                onClick={() => onStepClick && onStepClick(idx)}
                aria-current={isActive ? "step" : undefined}
                aria-label={`Step ${idx + 1}: ${step.label} (${statusText})`}
              >
                <div className="pop-stepper-node-rb">
                  {isCompleted ? "✓" : idx + 1}
                </div>
                <span className="pop-stepper-label-rb">{step.label}</span>
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default PopStepperRB;
