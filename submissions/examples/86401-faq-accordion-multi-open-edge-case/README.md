# FAQ Accordion — Multi Open State Edge Case Assertions

## Overview

This submission demonstrates an FAQ Accordion with a configurable multi-open
state and adds focused Vitest assertions for boundary and invalid-input cases.

The tests verify that the `multiOpen` flag correctly controls whether multiple
FAQ items can remain expanded.

## Features

- FAQ accordion interface
- Multi-open state toggle
- Smooth accordion animation
- Responsive layout
- Vitest edge-case assertions
- Pure HTML, CSS, and JavaScript
- No external UI libraries

## Test Coverage

### Happy Path

- Multiple items remain open when `multiOpen` is `true`
- Only the selected item remains open when `multiOpen` is `false`
- Already-open items can be closed in multi-open mode

### Edge Cases

- First FAQ item
- Final FAQ item
- Single-item accordion
- Closing the only open item
- Multiple simultaneously open items
- Empty accordion

### Invalid Inputs

- Negative item index
- Out-of-range item index
- Extremely large index
- Decimal index
- String index
- `null` multi-open flag
- `undefined` multi-open flag
- Non-array accordion state

## Expected Behavior

When `multiOpen` is `true`, toggling an item should not close other
already-open items.

When `multiOpen` is `false`, opening an item should close all other items.

Invalid indices and unsupported state values should not corrupt the existing
accordion state.

## Running the Tests

From the repository root:

```bash
npx vitest run submissions/examples/86401-faq-accordion-multi-open-edge-case/multi-open-edge.test.js