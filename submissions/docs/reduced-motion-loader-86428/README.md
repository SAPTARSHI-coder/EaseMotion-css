# Reduced Motion Loader Regression Test

## Overview

This submission adds regression coverage for loader behavior when the user
has enabled `prefers-reduced-motion: reduce`.

The loader remains visible and understandable while unnecessary motion is
suppressed.

## Covered Scenarios

- Normal motion preference
- `prefers-reduced-motion: reduce`
- Animation suppression
- Loader visibility
- Loader layout stability
- Multiple loader elements
- Preference changes

## Expected Behavior

### Normal Motion

The loader should animate normally.

### Reduced Motion

When the browser or operating system requests reduced motion:

- Loader animation should be disabled.
- Loader should remain visible.
- Loader layout should remain stable.
- The loader should continue communicating that content is loading.

## Accessibility

The implementation respects the user's motion preference through:

```css
@media (prefers-reduced-motion: reduce)