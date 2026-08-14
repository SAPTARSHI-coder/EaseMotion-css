import React from 'react';
import './style.css';

const steps = ['Cart', 'Shipping', 'Payment', 'Confirm'];

export default function StepperProgress({ current = 1 }) {
  return (
    <div className="ease-stepper">
      {steps.map((s, i) => (
        <div key={s} className={`ease-step ${i < current ? 'completed' : ''} ${i === current ? 'active' : ''}`}>
          <div className="ease-step-node">{i < current ? '✓' : i + 1}</div>
          <div className="ease-step-label">{s}</div>
          {i < steps.length - 1 && <div className={`ease-step-line ${i < current ? 'filled' : ''}`} />}
        </div>
      ))}
    </div>
  );
}
