# CSS Custom Property Override Runtime Audit

A responsive CSS custom-property runtime testing example created for
issue #82018.

## Overview

This example verifies that CSS custom properties can be safely
overridden, read, removed, and restored at runtime.

The audit covers:

- Runtime custom-property overrides
- Repeated overrides
- CSS custom-property naming
- Unit-based values
- Property removal
- CSS `var()` fallback values
- Empty values
- Invalid property names
- Invalid runtime input
- Deterministic repeated assignments

## Runtime Override

A custom property can be assigned with:

```js
element.style.setProperty(
  "--audit-accent",
  "#ff7096"
);