# Split Button — Main Action Click Handler Edge Case Assertions

## Overview

This submission demonstrates a Split Button with a primary action and a
secondary dropdown action.

The accompanying Vitest specification focuses on the main action click
handler, including normal behavior, repeated clicks, boundary cases,
invalid handlers, and handler isolation.

## Features

- Primary Split Button action
- Secondary dropdown action
- Interactive action menu
- Accessible button labels and states
- Responsive layout
- Vitest edge-case assertions
- Pure HTML, CSS, and JavaScript
- No external UI libraries

## Test Coverage

### Happy Path

- Main action invokes its handler
- Repeated clicks invoke the handler the expected number of times
- Click event is passed to the handler

### Edge Cases

- Main action without dropdown state
- Repeated main action clicks
- Event without a target
- Empty event object

### Invalid Inputs

- `null` handler
- `undefined` handler
- String handler
- Number handler
- Object handler
- Array handler

### Handler Isolation

- Main action does not invoke the dropdown handler
- Main action does not invoke unrelated secondary actions

## Expected Behavior

Clicking the main action should invoke only the primary action handler.

The main action should remain independent from the dropdown action.

Invalid handler values should be ignored safely rather than causing an
unexpected execution or runtime failure.

## Running the Tests

From the repository root:

```bash
npx vitest run submissions/examples/86405-split-button-main-action-edge-case/main-action-edge.test.js