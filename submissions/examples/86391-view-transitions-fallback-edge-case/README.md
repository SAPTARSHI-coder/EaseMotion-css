# View Transitions Fallback — Edge Case Assertions

## Overview

This submission adds focused Vitest edge-case assertions for View Transitions
fallback support.

The tests verify that normal DOM updates continue to execute when
`startViewTransition` is missing, undefined, null, or replaced by an invalid
non-callable value.

The suite also verifies boundary behavior when the API is available and
ensures fallback callbacks execute exactly once.

## Features

- View Transitions API detection
- Graceful fallback behavior
- Interactive content updates
- Reset functionality
- Responsive layout
- Focused Vitest edge-case tests
- Pure HTML, CSS, and JavaScript
- No external UI libraries

## Edge Case Coverage

### API Boundary Cases

- `undefined`
- `null`
- `false`
- Empty string

### Invalid API Values

- String
- Object
- Array
- Number

### Fallback Execution

- Exactly-once callback execution
- Repeated fallback updates
- Empty callback
- State update callback
- Sequential state updates

### Supported API

- Callable `startViewTransition`
- Callback execution through the API
- Transition API error propagation

### Callback Errors

- Fallback callback errors
- DOM update errors
- Error propagation without silent failure

## Expected Behavior

When `startViewTransition` is unavailable or is not callable, the application
must execute the update callback directly.

For example:

```text
if (typeof startViewTransition === "function") {
  startViewTransition(update);
} else {
  update();
}