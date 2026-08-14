import { describe, it, expect } from "vitest";

function createStepper(totalSteps) {
  let currentStep = 0;

  function nextStep() {
    if (
      !Number.isInteger(currentStep) ||
      currentStep < 0 ||
      currentStep >= totalSteps - 1
    ) {
      return false;
    }

    currentStep += 1;
    return true;
  }

  function previousStep() {
    if (
      !Number.isInteger(currentStep) ||
      currentStep <= 0 ||
      currentStep >= totalSteps
    ) {
      return false;
    }

    currentStep -= 1;
    return true;
  }

  function getCurrentStep() {
    return currentStep;
  }

  return {
    nextStep,
    previousStep,
    getCurrentStep
  };
}

describe("Stepper Next Previous Step Validation", () => {
  it("moves to the next step from the first step", () => {
    const stepper = createStepper(3);

    expect(stepper.nextStep()).toBe(true);
    expect(stepper.getCurrentStep()).toBe(1);
  });

  it("moves forward through multiple steps", () => {
    const stepper = createStepper(4);

    expect(stepper.nextStep()).toBe(true);
    expect(stepper.nextStep()).toBe(true);

    expect(stepper.getCurrentStep()).toBe(2);
  });

  it("moves to the previous step", () => {
    const stepper = createStepper(3);

    stepper.nextStep();
    stepper.nextStep();

    expect(stepper.previousStep()).toBe(true);
    expect(stepper.getCurrentStep()).toBe(1);
  });

  it("allows navigation from the middle step in both directions", () => {
    const stepper = createStepper(3);

    stepper.nextStep();

    expect(stepper.getCurrentStep()).toBe(1);
    expect(stepper.nextStep()).toBe(true);
    expect(stepper.getCurrentStep()).toBe(2);
    expect(stepper.previousStep()).toBe(true);
    expect(stepper.getCurrentStep()).toBe(1);
  });

  it("does not move beyond the final step", () => {
    const stepper = createStepper(3);

    stepper.nextStep();
    stepper.nextStep();

    expect(stepper.getCurrentStep()).toBe(2);
    expect(stepper.nextStep()).toBe(false);
    expect(stepper.getCurrentStep()).toBe(2);
  });

  it("does not move before the first step", () => {
    const stepper = createStepper(3);

    expect(stepper.previousStep()).toBe(false);
    expect(stepper.getCurrentStep()).toBe(0);
  });

  it("preserves the current step after invalid next navigation", () => {
    const stepper = createStepper(3);

    stepper.nextStep();
    stepper.nextStep();

    const currentStep = stepper.getCurrentStep();

    expect(stepper.nextStep()).toBe(false);
    expect(stepper.getCurrentStep()).toBe(currentStep);
  });

  it("preserves the current step after invalid previous navigation", () => {
    const stepper = createStepper(3);

    const currentStep = stepper.getCurrentStep();

    expect(stepper.previousStep()).toBe(false);
    expect(stepper.getCurrentStep()).toBe(currentStep);
  });

  it("does not allow a negative step index", () => {
    const stepper = createStepper(3);

    stepper.previousStep();

    expect(stepper.getCurrentStep()).toBeGreaterThanOrEqual(0);
  });

  it("does not allow the step index to exceed the final step", () => {
    const stepper = createStepper(3);

    stepper.nextStep();
    stepper.nextStep();
    stepper.nextStep();

    expect(stepper.getCurrentStep()).toBeLessThan(3);
  });

  it("handles a single-step stepper", () => {
    const stepper = createStepper(1);

    expect(stepper.nextStep()).toBe(false);
    expect(stepper.previousStep()).toBe(false);
    expect(stepper.getCurrentStep()).toBe(0);
  });

  it("handles an empty stepper safely", () => {
    const stepper = createStepper(0);

    expect(stepper.nextStep()).toBe(false);
    expect(stepper.previousStep()).toBe(false);
    expect(stepper.getCurrentStep()).toBe(0);
  });
});