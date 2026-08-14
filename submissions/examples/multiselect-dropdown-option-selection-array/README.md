# Multi-Select Dropdown Option Selection Array

## Overview

This submission adds Vitest coverage for the option-selection state of a multi-select dropdown.

The tests verify that options can be added and removed correctly while handling edge cases and invalid input safely.

## Test Coverage

- Add an option to an empty selection
- Add options to an existing array
- Remove selected options
- Toggle the same option
- Preserve selection order
- Remove the final selected option
- Preserve the original array
- Handle null and undefined selection arrays
- Handle invalid option values
- Manage multiple selections

## Demo

Open `demo.html` directly in a browser.

## Running the Tests

```bash
vitest run submissions/examples/multiselect-dropdown-option-selection-array/multiselect-dropdown.test.js
```

## Why It Fits EaseMotion CSS

The submission provides a lightweight, dependency-free dropdown example while adding automated coverage for the selection-state behavior.