import React from 'react';

/**
 * Stepper — A progress bar with animated pulse nodes for active/completed steps.
 *
 * @param {Array}  steps       - Array of strings or objects { label, description }
 * @param {number} activeStep  - Current active step index (0-based)
 * @param {string} orientation - 'horizontal' (default) or 'vertical'
 * @param {string} color       - Base color for active/completed states (default: '#3b82f6')
 */
const Stepper = ({
  steps = [],
  activeStep = 0,
  orientation = 'horizontal',
  color = '#3b82f6',
}) => {
  return (
    <div
      className={`ease-stepper ease-stepper--${orientation}`}
      style={{ '--ease-step-color': color }}
      role="progressbar"
      aria-valuenow={activeStep + 1}
      aria-valuemin="1"
      aria-valuemax={steps.length}
    >
      {steps.map((step, index) => {
        const isCompleted = index < activeStep;
        const isActive = index === activeStep;
        const isPending = index > activeStep;

        let statusClass = 'is-pending';
        if (isCompleted) statusClass = 'is-completed';
        if (isActive) statusClass = 'is-active';

        const label = typeof step === 'string' ? step : step.label;
        const description = typeof step === 'object' && step.description ? step.description : null;

        return (
          <div
            key={index}
            className={`ease-step ${statusClass}`}
            aria-current={isActive ? 'step' : undefined}
          >
            {/* ── Connecting Line (Rendered on all but first step) ── */}
            {index > 0 && (
              <div className="ease-step-connector">
                <div
                  className="ease-step-connector-fill"
                  style={{
                    transform: isCompleted || isActive ? 'scale(1)' : 'scale(0)',
                  }}
                />
              </div>
            )}

            {/* ── Step Node ── */}
            <div className="ease-step-node-wrapper">
              <div className="ease-step-node">
                {isCompleted ? (
                  <svg className="ease-step-icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <span className="ease-step-number">{index + 1}</span>
                )}
              </div>
              {/* Pulse effect for active node */}
              {isActive && <div className="ease-step-pulse" aria-hidden="true" />}
            </div>

            {/* ── Step Content ── */}
            <div className="ease-step-content">
              <span className="ease-step-label">{label}</span>
              {description && <span className="ease-step-desc">{description}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
