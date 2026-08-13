/**
 * Stepper Next/Previous Step Validation — Edge Case Tests
 * =========================================================
 * Issue: #82009 — test: Add edge case test for Stepper Next Previous Step Validation
 *
 * This file demonstrates edge case coverage for a stepper component's
 * navigation logic (nextStep, prevStep, goToStep, isFirstStep, isLastStep).
 *
 * Run: npx vitest run submissions/examples/82009-stepper-next-prev-validation-test/stepper-validation.test.js
 */

import { describe, it, expect, beforeEach } from 'vitest';

// ── Stepper Logic (self-contained for submission demo) ───────────────────────

/**
 * Creates a stepper state manager with next/prev/goto navigation.
 * @param {number} totalSteps - Total number of steps (must be >= 1)
 * @param {number} initialStep - Starting step index (1-based, default 1)
 */
function createStepper(totalSteps, initialStep = 1) {
  if (typeof totalSteps !== 'number' || totalSteps < 1 || !Number.isInteger(totalSteps)) {
    throw new Error('totalSteps must be a positive integer');
  }
  const clamp = (n) => Math.min(Math.max(1, n), totalSteps);

  let current = clamp(typeof initialStep === 'number' && Number.isFinite(initialStep) ? Math.round(initialStep) : 1);

  return {
    /** Advance to the next step; stays at last step if already there */
    nextStep() {
      current = clamp(current + 1);
      return current;
    },
    /** Go back to the previous step; stays at step 1 if already there */
    prevStep() {
      current = clamp(current - 1);
      return current;
    },
    /**
     * Jump to a specific step.
     * Invalid inputs (null, undefined, out-of-range) are clamped or ignored gracefully.
     */
    goToStep(step) {
      if (step === null || step === undefined || typeof step !== 'number' || !Number.isFinite(step)) {
        return current; // no-op on invalid input
      }
      current = clamp(Math.round(step));
      return current;
    },
    /** Returns the current step number (1-based) */
    getStep() {
      return current;
    },
    /** True only when on the first step */
    isFirstStep() {
      return current === 1;
    },
    /** True only when on the last step */
    isLastStep() {
      return current === totalSteps;
    },
    /** Reset to a given step (default: step 1) */
    reset(step = 1) {
      current = clamp(typeof step === 'number' && Number.isFinite(step) ? Math.round(step) : 1);
      return current;
    },
  };
}

// ── Tests ────────────────────────────────────────────────────────────────────

describe('createStepper() — initialization', () => {
  it('starts at step 1 by default', () => {
    const s = createStepper(5);
    expect(s.getStep()).toBe(1);
  });

  it('starts at a custom initial step', () => {
    const s = createStepper(5, 3);
    expect(s.getStep()).toBe(3);
  });

  it('clamps initial step below 1 to step 1', () => {
    const s = createStepper(5, -10);
    expect(s.getStep()).toBe(1);
  });

  it('clamps initial step above totalSteps to last step', () => {
    const s = createStepper(5, 999);
    expect(s.getStep()).toBe(5);
  });

  it('throws when totalSteps is not a positive integer', () => {
    expect(() => createStepper(0)).toThrow();
    expect(() => createStepper(-3)).toThrow();
    expect(() => createStepper(1.5)).toThrow();
    expect(() => createStepper('3')).toThrow();
  });
});

describe('nextStep() — happy path', () => {
  let s;
  beforeEach(() => { s = createStepper(4); });

  it('advances from step 1 to step 2', () => {
    expect(s.nextStep()).toBe(2);
  });

  it('advances through all steps sequentially', () => {
    expect(s.nextStep()).toBe(2);
    expect(s.nextStep()).toBe(3);
    expect(s.nextStep()).toBe(4);
  });
});

describe('nextStep() — boundary edge cases', () => {
  it('stays at last step when already at last step', () => {
    const s = createStepper(3, 3);
    expect(s.nextStep()).toBe(3);
    expect(s.nextStep()).toBe(3); // still 3, not 4
  });

  it('works on a single-step stepper', () => {
    const s = createStepper(1);
    expect(s.nextStep()).toBe(1); // cannot go forward
  });
});

describe('prevStep() — happy path', () => {
  let s;
  beforeEach(() => { s = createStepper(4, 4); });

  it('goes back from step 4 to step 3', () => {
    expect(s.prevStep()).toBe(3);
  });

  it('goes back through all steps sequentially', () => {
    expect(s.prevStep()).toBe(3);
    expect(s.prevStep()).toBe(2);
    expect(s.prevStep()).toBe(1);
  });
});

describe('prevStep() — boundary edge cases', () => {
  it('stays at step 1 when already at step 1', () => {
    const s = createStepper(3, 1);
    expect(s.prevStep()).toBe(1);
    expect(s.prevStep()).toBe(1); // still 1, not 0
  });

  it('works on a single-step stepper', () => {
    const s = createStepper(1);
    expect(s.prevStep()).toBe(1); // cannot go back
  });
});

describe('goToStep() — happy path', () => {
  let s;
  beforeEach(() => { s = createStepper(5); });

  it('jumps to a valid middle step', () => {
    expect(s.goToStep(3)).toBe(3);
  });

  it('jumps to the first step', () => {
    s.goToStep(4);
    expect(s.goToStep(1)).toBe(1);
  });

  it('jumps to the last step', () => {
    expect(s.goToStep(5)).toBe(5);
  });
});

describe('goToStep() — invalid inputs (no crash)', () => {
  let s;
  beforeEach(() => { s = createStepper(5, 3); });

  it('is a no-op for null', () => {
    expect(s.goToStep(null)).toBe(3); // unchanged
  });

  it('is a no-op for undefined', () => {
    expect(s.goToStep(undefined)).toBe(3);
  });

  it('is a no-op for NaN', () => {
    expect(s.goToStep(NaN)).toBe(3);
  });

  it('is a no-op for Infinity', () => {
    expect(s.goToStep(Infinity)).toBe(3);
  });

  it('is a no-op for a string', () => {
    expect(s.goToStep('2')).toBe(3);
  });

  it('clamps negative step to step 1', () => {
    expect(s.goToStep(-99)).toBe(1);
  });

  it('clamps out-of-range step to last step', () => {
    expect(s.goToStep(999)).toBe(5);
  });

  it('rounds float to nearest integer step', () => {
    expect(s.goToStep(2.7)).toBe(3);
    expect(s.goToStep(2.3)).toBe(2);
  });
});

describe('isFirstStep() / isLastStep()', () => {
  it('isFirstStep() is true only on step 1', () => {
    const s = createStepper(3, 1);
    expect(s.isFirstStep()).toBe(true);
    s.nextStep();
    expect(s.isFirstStep()).toBe(false);
  });

  it('isLastStep() is true only on the last step', () => {
    const s = createStepper(3, 3);
    expect(s.isLastStep()).toBe(true);
    s.prevStep();
    expect(s.isLastStep()).toBe(false);
  });

  it('both are true for a single-step stepper', () => {
    const s = createStepper(1);
    expect(s.isFirstStep()).toBe(true);
    expect(s.isLastStep()).toBe(true);
  });
});

describe('reset()', () => {
  it('resets to step 1 by default', () => {
    const s = createStepper(5, 4);
    s.reset();
    expect(s.getStep()).toBe(1);
  });

  it('resets to a specific step', () => {
    const s = createStepper(5, 4);
    s.reset(2);
    expect(s.getStep()).toBe(2);
  });
});

describe('combined navigation — real-world flows', () => {
  it('simulates a full forward-then-back flow', () => {
    const s = createStepper(4);
    s.nextStep(); // 2
    s.nextStep(); // 3
    s.nextStep(); // 4
    expect(s.isLastStep()).toBe(true);
    s.prevStep(); // 3
    s.prevStep(); // 2
    expect(s.getStep()).toBe(2);
    expect(s.isFirstStep()).toBe(false);
  });

  it('handles rapid next/prev boundary toggling without corruption', () => {
    const s = createStepper(3, 1);
    for (let i = 0; i < 10; i++) s.nextStep(); // spam next
    expect(s.getStep()).toBe(3); // clamped at last
    for (let i = 0; i < 10; i++) s.prevStep(); // spam prev
    expect(s.getStep()).toBe(1); // clamped at first
  });
});
