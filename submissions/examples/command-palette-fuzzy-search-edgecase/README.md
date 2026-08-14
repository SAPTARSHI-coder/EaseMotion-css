# Command Palette Fuzzy Search Filter Edge Cases

## Overview

This submission adds automated Vitest edge-case coverage for a command palette fuzzy search filter.

## Test Coverage

* Empty query
* Whitespace-only query
* Case-insensitive search
* Partial matches
* Middle substring matches
* Unknown search terms
* Duplicate commands
* Single command list
* Empty command list
* Invalid command arrays
* Invalid query types
* Original array immutability
* New array returned for empty queries

## Demo

Open `demo.html` directly in a browser.

## Run Tests

```bash
npx vitest run submissions/examples/command-palette-fuzzy-search-edgecase/command-palette-edgecase.test.js
```

## Notes

All files are contained within `submissions/` to comply with the repository contribution guidelines.
