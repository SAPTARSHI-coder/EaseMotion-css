# Command Palette Fuzzy Search Filter Function

## Overview

This submission adds automated Vitest coverage for a command palette fuzzy search filter.

The test suite validates search behavior for normal usage, partial matches, case-insensitive matching, edge cases, and invalid inputs.

## Test Coverage

* Empty query returns all commands
* Partial matching
* Multiple matches
* Case-insensitive search
* Substring matching
* No-match scenarios
* Whitespace trimming
* Invalid command list
* Invalid query values
* Duplicate commands
* Original array immutability
* Single-item command list

## Demo

Open `demo.html` directly in a browser.

## Run Tests

```bash
npx vitest run submissions/examples/command-palette-fuzzy-search-filter/command-palette-fuzzy.test.js
```

## Notes

All contribution files are intentionally contained inside `submissions/` to comply with the repository contribution guidelines.
