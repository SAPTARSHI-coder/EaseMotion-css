# Reduced Motion Loader Behavior Regression Test

## Overview

This regression test verifies that the loader behaves correctly when a
user has enabled `prefers-reduced-motion: reduce`.

The loader must remain visible and understandable while unnecessary
animation is suppressed.

## Regression Scenarios

The test covers the following scenarios:

1. Normal motion preference.
2. `prefers-reduced-motion: reduce`.
3. Loader animation suppression.
4. Loader visibility under reduced motion.
5. Loader accessibility and understandable loading state.
6. Runtime preference changes.

## Expected Behavior

### Normal Motion

When the browser does not request reduced motion:

- The loader remains visible.
- The loader animation is active.
- The loading message remains visible.

### Reduced Motion

When `prefers-reduced-motion: reduce` is active:

- The loader remains visible.
- Continuous animation is suppressed.
- The loading message remains visible.
- The loader continues to expose a meaningful loading state.

### Preference Changes

The test listens for changes to the
`prefers-reduced-motion` media query.

Changing the browser preference should update the regression checks
without requiring a page reload.

## How to Test

Open `demo.html` in a browser.

### Normal Motion

Use the default browser motion preference and verify:

- Motion preference is detected.
- Loader is visible.
- Loader animation is active.
- Accessibility check passes.

### Reduced Motion

Enable reduced motion in the operating system or browser accessibility
settings.

Reload the page if required by the browser.

Verify:

- Reduced motion is detected.
- Loader remains visible.
- Animation is suppressed.
- Loader text remains visible.
- Accessibility check passes.

### Runtime Preference Change

If the browser supports live media-query preference updates, change
the reduced-motion preference while the page is open.

The displayed test results should update automatically.

## Accessibility Notes

Reduced motion should not remove important status information.

This test keeps the loader visible and provides a text-based loading
message so that the loading state remains understandable even when
animation is disabled.

## Related Issue

Closes #86428