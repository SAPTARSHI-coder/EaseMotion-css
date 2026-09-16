# View Transitions — Fallback Support

## Overview

This submission demonstrates progressive enhancement for the View Transitions
API.

When `document.startViewTransition` is available, the transition API is used.
When the API is unavailable, the DOM update is executed directly as a
fallback.

The accompanying Vitest specification verifies both supported and fallback
execution paths.

## Features

- View Transitions API detection
- Graceful fallback for unsupported browsers
- Animated content transition when supported
- Accessible live status message
- Responsive layout
- Vitest unit tests
- Pure HTML, CSS, and JavaScript
- No external UI libraries

## Test Coverage

### Happy Path

- Uses `startViewTransition` when available
- Executes the DOM update through the transition
- Returns the transition object

### Fallback Coverage

- Missing View Transitions API
- `undefined` API
- `null` API
- Non-function API
- Boolean API
- Fallback DOM updates without a transition object

### Edge Cases

- Repeated fallback updates
- Repeated supported transitions
- Callback errors
- Transition API errors

### Invalid Inputs

- Missing callback
- String API value
- Object API value
- Numeric API value
- Invalid transition API values

## Expected Behavior

When View Transitions are supported:

```text
startViewTransition(updateCallback)