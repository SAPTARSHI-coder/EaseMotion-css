# Range Slider Value Change Handler – Edge Case Assertions

## Overview

This submission demonstrates a responsive **Range Slider Value Change Handler** along with a **Vitest edge-case test suite**.

The tests verify that slider values remain valid, are correctly clamped to the allowed range, and safely handle invalid or unexpected inputs.

---

## Features

- Interactive range slider
- Live value display
- Animated progress bar
- Responsive design
- Pure HTML, CSS, and JavaScript
- No external libraries

---

## Test Coverage

### Happy Path

- Valid slider values
- Minimum value
- Maximum value

### Boundary Conditions

- Values below minimum
- Values above maximum
- Decimal values
- Rounded output

### Invalid Inputs

- `undefined`
- `null`
- `NaN`
- Strings
- Arrays
- Objects
- Boolean values

### Assertions

- Integer output
- Values always within range
- Deterministic behavior
- 100% passing assertions

---

## Folder Structure

```text
86338-range-slider-value-change-edge-case/
├── demo.html
├── style.css
├── range-slider-edge.test.js
└── README.md
```

---

## Running

Open `demo.html` in a browser.

Run tests:

```bash
npx vitest run submissions/examples/86338-range-slider-value-change-edge-case/range-slider-edge.test.js
```

---

## Related Issue

**#86338**

**test: Add edge case assertion for Range Slider Value Change Handler**