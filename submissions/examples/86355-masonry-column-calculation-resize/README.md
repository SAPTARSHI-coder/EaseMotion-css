# Masonry Column Calculation Resize

## Overview

This submission demonstrates a responsive Masonry layout whose column count changes according to the available container width.

A Vitest specification validates column calculation logic, resize behavior, boundary values, edge cases, invalid inputs, and deterministic output.

---

## Features

- Responsive masonry grid
- Dynamic column calculation
- Interactive resize slider
- Pure HTML, CSS, and JavaScript
- No external libraries
- Comprehensive Vitest unit tests

---

## Test Coverage

### Happy Path

- Mobile layout
- Tablet layout
- Desktop layout
- Large desktop layout

### Boundary Checks

- 500px breakpoint
- 700px breakpoint
- 900px breakpoint

### Invalid Inputs

- `undefined`
- `null`
- `NaN`
- Negative values
- Strings
- Objects
- Arrays

### Assertions

- Integer return value
- Column count always between 1–4
- Deterministic output
- 100% passing assertions

---

## Folder Structure

```text
86355-masonry-column-calculation-resize/
├── demo.html
├── style.css
├── masonry-columns.test.js
└── README.md
```

---

## Running the Demo

Open `demo.html` in any modern browser.

## Running the Tests

```bash
npx vitest run submissions/examples/86355-masonry-column-calculation-resize/masonry-columns.test.js
```

or

```bash
npm test
```

---

## Related Issue

**#86355**

**test: Add Vitest unit spec for Masonry Column Calculation Resize**