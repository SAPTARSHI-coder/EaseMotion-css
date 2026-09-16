# Command Palette Keyboard Item Selection Edge Cases

## Overview

This submission adds automated Vitest edge-case coverage for keyboard navigation in a command palette.

## Test Coverage

* Initial selection
* Up-arrow boundary
* Down-arrow boundary
* Repeated navigation
* Alternating navigation
* Empty command list
* Single-item command list
* Duplicate command names
* Mixed navigation
* Navigation return values
* Selection index validation

## Demo

Open `demo.html` directly in a browser.

## Run Tests

```bash
npx vitest run submissions/examples/command-palette-keyboard-selection-edgecase/command-palette-keyboard-edgecase.test.js
```

## Notes

All contribution files are contained within `submissions/` in accordance with the repository contribution guidelines.
