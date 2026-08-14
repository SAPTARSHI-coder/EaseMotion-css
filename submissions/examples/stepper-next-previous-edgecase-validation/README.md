# Stepper Next Previous Edge Case Validation

## Overview

This submission adds automated Vitest coverage for edge cases in Stepper next/previous navigation.

## Covered Cases

- Initial state
- Next navigation
- Previous navigation
- First-step boundary
- Last-step boundary
- Repeated invalid navigation
- Single-step workflow
- Empty workflow
- Forward/backward navigation
- Step index never negative
- Step index never exceeds maximum

## Demo

Open `demo.html` in a browser.

## Run Tests

```bash
npx vitest run submissions/examples/stepper-next-previous-edgecase-validation/stepper-edgecase.test.js