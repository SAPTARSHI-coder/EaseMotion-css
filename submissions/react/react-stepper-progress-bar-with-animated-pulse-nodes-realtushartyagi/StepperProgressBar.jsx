import React, { useState } from 'react';

/**
 * StepperProgressBar
 * A horizontal stepper showing progress through a series of steps.
 * Each node animates with a subtle pulse when it becomes active.
 *
 * Props:
 * - steps: string[] – labels for each step.
 * - currentStep: number – zero‑based index of the currently active step.
 */
export default function StepperProgressBar({ steps = [], currentStep = 0 }) {
  return (
    <div className="ease-stepper-container">
      {steps.map((label, idx) => (
        <React.Fragment key={idx}>
          <div className="ease-stepper-node">
            <div
              className={`ease-node-circle ${idx <= currentStep ? "ease-node-active" : ""}`}
            >
              {idx + 1}
            </div>
            <div className="ease-node-label">{label}</div>
          </div>
          {idx < steps.length - 1 && (
            <div
              className={`ease-stepper-connector ${idx < currentStep ? "ease-connector-active" : ""}`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
