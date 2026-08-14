# Stepper Next Previous Step Validation

## Overview

This submission adds Vitest coverage for next and previous navigation in a Stepper component.

The tests verify valid navigation, boundary conditions, invalid navigation attempts, and unusual step configurations.

## Test Coverage

* Move from the first step to the next step
* Navigate through multiple steps
* Move to the previous step
* Navigate in both directions
* Prevent navigation beyond the final step
* Prevent navigation before the first step
* Preserve the current step after invalid navigation
* Prevent negative step indexes
* Prevent indexes beyond the final step
* Handle a single-step Stepper
* Handle an empty Stepper configuration

## Demo

Open `demo.html` directly in a browser to view the Stepper demonstration.

## Running the Tests

```bash
npx vitest run submissions/examples/stepper-next-previous-step-validation/stepper-validation.test.js
```

## Why It Fits EaseMotion CSS

The submission provides a lightweight Stepper demonstration together with automated Vitest coverage for its navigation and validation behavior.

All contribution files are contained within `submissions/`.
