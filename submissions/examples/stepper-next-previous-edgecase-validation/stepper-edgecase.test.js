import { describe, it, expect } from "vitest";

function createStepper(totalSteps = 3) {
  let currentStep = 0;

  return {
    next() {
      if (
        !Number.isInteger(currentStep) ||
        currentStep >= totalSteps - 1 ||
        currentStep < 0
      ) {
        return false;
      }

      currentStep++;
      return true;
    },

    previous() {
      if (
        !Number.isInteger(currentStep) ||
        currentStep <= 0 ||
        currentStep >= totalSteps
      ) {
        return false;
      }

      currentStep--;
      return true;
    },

    current() {
      return currentStep;
    }
  };
}

describe("Stepper Next Previous Edge Cases", () => {
  it("starts at step zero", () => {
    const stepper = createStepper();
    expect(stepper.current()).toBe(0);
  });

  it("moves forward one step", () => {
    const stepper = createStepper();

    expect(stepper.next()).toBe(true);
    expect(stepper.current()).toBe(1);
  });

  it("moves backward after moving forward", () => {
    const stepper = createStepper();

    stepper.next();
    stepper.next();

    expect(stepper.previous()).toBe(true);
    expect(stepper.current()).toBe(1);
  });

  it("cannot go before the first step", () => {
    const stepper = createStepper();

    expect(stepper.previous()).toBe(false);
    expect(stepper.current()).toBe(0);
  });

  it("cannot go beyond the final step", () => {
    const stepper = createStepper(3);

    stepper.next();
    stepper.next();

    expect(stepper.current()).toBe(2);
    expect(stepper.next()).toBe(false);
    expect(stepper.current()).toBe(2);
  });

  it("handles a single-step workflow", () => {
    const stepper = createStepper(1);

    expect(stepper.next()).toBe(false);
    expect(stepper.previous()).toBe(false);
    expect(stepper.current()).toBe(0);
  });

  it("handles zero configured steps safely", () => {
    const stepper = createStepper(0);

    expect(stepper.next()).toBe(false);
    expect(stepper.previous()).toBe(false);
    expect(stepper.current()).toBe(0);
  });

  it("maintains state after repeated invalid next calls", () => {
    const stepper = createStepper(2);

    stepper.next();

    expect(stepper.next()).toBe(false);
    expect(stepper.next()).toBe(false);
    expect(stepper.current()).toBe(1);
  });

  it("maintains state after repeated invalid previous calls", () => {
    const stepper = createStepper();

    expect(stepper.previous()).toBe(false);
    expect(stepper.previous()).toBe(false);
    expect(stepper.current()).toBe(0);
  });

  it("supports forward then backward navigation", () => {
    const stepper = createStepper(4);

    stepper.next();
    stepper.next();
    stepper.previous();

    expect(stepper.current()).toBe(1);
  });

  it("never exceeds the valid step range", () => {
    const stepper = createStepper(5);

    for (let i = 0; i < 20; i++) {
      stepper.next();
    }

    expect(stepper.current()).toBe(4);
  });

  it("never becomes negative", () => {
    const stepper = createStepper(5);

    for (let i = 0; i < 20; i++) {
      stepper.previous();
    }

    expect(stepper.current()).toBe(0);
  });
});