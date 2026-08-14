# Compare Table Column Highlight Hover — Edge Case Assertions

## Overview

This submission adds a self-contained Compare Table demonstration with focused Vitest assertions for column highlight hover behavior.

The tests concentrate on boundary conditions, invalid column indices, and unusual table configurations.

## Features

- Interactive comparison table
- Column highlight on hover
- Responsive table layout
- Pure HTML and CSS
- Vitest edge-case assertions
- No external UI libraries

## Test Coverage

### Happy Path

- Highlights a valid selected column
- Moves the highlight between valid columns

### Edge Cases

- First column
- Last column
- Single-column table
- Empty table
- Ensures only one column is highlighted

### Invalid Inputs

- Negative column index
- Index beyond the final column
- Extremely large index
- Decimal index
- String index
- `null`
- `undefined`
- Negative column count

## Expected Behavior

A valid column index should highlight exactly that column.

Invalid or out-of-range indices should return no highlighted columns instead of producing an incorrect column highlight or throwing an error.

## Running the Tests

From the repository root:

```bash
npx vitest run submissions/examples/86385-compare-table-column-highlight-edge-case/column-highlight-edge.test.js