# Carousel Slide Index Bounds Check – Edge Case Assertions

## Overview

This submission demonstrates a responsive **Carousel Slide Index Bounds Check** together with a **Vitest edge-case test suite**.

The carousel ensures that the active slide index always remains within valid limits, even when invalid or out-of-range values are supplied.

---

## Features

- Interactive carousel
- Previous / Next navigation
- Automatic slide index clamping
- Responsive layout
- Smooth slide transitions
- Pure HTML, CSS, and JavaScript
- No external UI libraries

---

## Edge Case Test Coverage

### Happy Path

- Initial slide index
- Previous navigation
- Next navigation
- Valid slide selection

### Boundary Conditions

- Index less than `0`
- Index equal to `0`
- Last valid index
- Index greater than last slide
- Extremely large positive index
- Extremely large negative index

### Invalid Inputs

- `undefined`
- `null`
- `NaN`
- Floating-point values
- Strings
- Empty string
- Objects
- Arrays
- Boolean values

### State Assertions

- Always returns an integer
- Always remains within valid bounds
- Deterministic output
- No mutation between calls
- Consistent behavior across repeated executions

---

## Folder Structure

```text
86353-carousel-slide-index-edge-case/
├── demo.html
├── style.css
├── carousel-index-edge.test.js
└── README.md
```

---

## Running the Demo

Open:

```text
demo.html
```

in any modern browser.

---

## Running the Tests

Execute only this test:

```bash
npx vitest run submissions/examples/86353-carousel-slide-index-edge-case/carousel-index-edge.test.js
```

Or run the project's full test suite:

```bash
npm test
```

---

## Expected Behavior

- Navigation never moves below the first slide.
- Navigation never exceeds the last slide.
- Invalid inputs safely resolve to a valid index.
- Every returned index remains inside the valid range.
- Repeated calls always produce deterministic results.

---

## Related Issue

**#86353**

**test: Add edge case assertion for Carousel Slide Index Bounds Check**

---

## Notes

This submission is completely self-contained inside the `submissions/` directory.

The focus of this contribution is **edge-case assertions** for carousel slide index validation, including boundary conditions, invalid inputs, deterministic behavior, and regression coverage, without modifying any existing project files.