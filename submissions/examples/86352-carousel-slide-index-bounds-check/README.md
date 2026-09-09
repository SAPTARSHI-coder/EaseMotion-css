# Carousel Slide Index Bounds Check

A self-contained submission demonstrating a **Carousel Slide Index Bounds Check** with an accompanying **Vitest unit test suite** focused on validating slide index calculations and boundary handling.

---

## Overview

This example implements a simple carousel that prevents navigation outside the valid slide range by clamping the active index.

The accompanying Vitest specification validates:

- Normal navigation
- Lower index bounds
- Upper index bounds
- Invalid inputs
- Deterministic behavior
- Boundary conditions

---

## Features

- Interactive carousel
- Previous / Next controls
- Active slide indicator
- Responsive layout
- Animated slide transitions
- Pure HTML, CSS, and JavaScript
- No external libraries

---

## Test Coverage

### Happy Paths

- Initial index
- Previous navigation
- Next navigation
- Valid index updates

### Boundary Checks

- Index cannot become negative
- Index cannot exceed the final slide
- First slide remains selected at lower bound
- Last slide remains selected at upper bound

### Invalid Inputs

- `undefined`
- `null`
- Negative values
- Floating-point values
- Strings
- Objects
- Arrays
- `NaN`

### Assertions

- Valid index always returned
- Returned value is an integer
- Index always remains inside bounds
- Deterministic results
- No unexpected mutations

---

## Project Structure

```text
86352-carousel-slide-index-bounds-check/
├── demo.html
├── style.css
├── carousel-index.test.js
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

Run the Vitest specification:

```bash
npx vitest run submissions/examples/86352-carousel-slide-index-bounds-check/carousel-index.test.js
```

Or execute the repository test suite:

```bash
npm test
```

---

## Expected Behavior

- The carousel starts on **Slide 1**.
- Clicking **Next** advances one slide until the final slide.
- Clicking **Previous** moves back one slide until the first slide.
- Attempting to navigate beyond either boundary keeps the index within valid limits.
- Invalid inputs safely resolve to a valid index.

---

## Related Issue

**#86352**

**test: Add Vitest unit spec for Carousel Slide Index Bounds Check**

---

## Notes

This submission is completely isolated inside the `submissions/` directory and does **not** modify any existing project files. The focus is on reliable carousel index validation with comprehensive Vitest coverage for happy paths, edge cases, invalid inputs, and boundary conditions.