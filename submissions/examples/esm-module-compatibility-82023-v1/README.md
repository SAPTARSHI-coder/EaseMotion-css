# ESM Module Export Import Compatibility Test

A responsive ESM module compatibility testing example created for
issue #82023.

## Overview

This example demonstrates compatibility checks for common ESM export
and import patterns.

The test workload covers:

- Default exports
- Named exports
- Multiple named exports
- Namespace-style access
- Missing exports
- Invalid export access
- Export type validation
- Callable named exports

## Test Coverage

### Happy Path

The test suite verifies that:

- The default export is available.
- Named exports are available.
- Version information is available.
- Expected namespace properties exist.
- Named functions remain callable.

### Edge Cases

The workload checks:

- Missing exports
- Undefined export access
- Namespace completeness
- Export type compatibility

### Invalid Input

Missing or unsupported exports are accessed safely and are expected to
resolve as unavailable rather than causing the interface to crash.

## Example Module

The compatibility workload represents a module with:

```js
export default "EaseMotion";

export function createComponent() {
  return "component";
}

export const version = "1.0.0";