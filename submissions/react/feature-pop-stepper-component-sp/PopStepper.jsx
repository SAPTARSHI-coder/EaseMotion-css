import React from "react";
import "./style.css";

const PopStepper = ({ steps, currentStep }) => {
  return (
    <nav
      className="ease-pop-stepper-sp"
      aria-label="Progress"
    >
      <ol className="ease-pop-stepper-list-sp">
        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <li
              key={stepNumber}
              className={`ease-pop-stepper-item-sp ${
                isActive ? "active" : ""
              } ${isCompleted ? "completed" : ""}`}
            >
              <span
                className="ease-pop-stepper-circle-sp"
                aria-current={isActive ? "step" : undefined}
              >
                {isCompleted ? "✓" : stepNumber}
              </span>

              <span className="ease-pop-stepper-label-sp">
                {step}
              </span>

              {index !== steps.length - 1 && (
                <span
                  className="ease-pop-stepper-line-sp"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default PopStepper;
