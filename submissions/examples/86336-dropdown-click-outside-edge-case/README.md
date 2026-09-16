# Dropdown Menu Click Outside Dismiss – Edge Case Assertions

## Overview

This submission demonstrates a dropdown menu that closes when the user clicks outside of it, along with a Vitest suite focused on edge-case assertions.

## Features

- Interactive dropdown menu
- Click outside to dismiss
- Item selection
- Responsive layout
- Pure HTML, CSS, and JavaScript

## Test Coverage

### Happy Path

- Click inside keeps menu open
- Click outside closes menu

### Edge Cases

- Missing event target
- Nested dropdown elements
- Empty object target

### Invalid Inputs

- `undefined`
- `null`
- Strings
- Numbers
- Arrays
- Boolean values

### Assertions

- Boolean return values
- Deterministic behavior
- 100% passing assertions

## Folder Structure

```text
86336-dropdown-click-outside-edge-case/
├── demo.html
├── style.css
├── dropdown-click-outside-edge.test.js
└── README.md
```

## Run Demo

Open `demo.html` in a browser.

## Run Tests

```bash
npx vitest run submissions/examples/86336-dropdown-click-outside-edge-case/dropdown-click-outside-edge.test.js
```

## Related Issue

**#86336**

**test: Add edge case assertion for Dropdown Menu Click Outside Dismiss**