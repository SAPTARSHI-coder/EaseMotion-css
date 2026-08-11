# Reduced Motion Accessibility Test

This submission provides a small standalone test/demo for verifying
reduced-motion accessibility behavior.

## Purpose

The test demonstrates how animated content should respond when the user
has enabled the `prefers-reduced-motion: reduce` accessibility preference.

## Expected Behavior

### Normal Motion

When reduced motion is not enabled:

- The demo element performs its animation.
- The animation runs continuously.
- The visual motion is preserved.

### Reduced Motion

When `prefers-reduced-motion: reduce` is enabled:

- The animation is disabled.
- The element remains stable.
- No unnecessary motion is introduced.

## How to Test

1. Open `demo.html` directly in a browser.
2. Observe the animated element.
3. Enable the operating-system/browser reduced-motion preference.
4. Reload the page if required.
5. Verify that the animation is disabled.
6. Disable the preference and verify that normal animation behavior returns.

## Accessibility Coverage

This test helps verify that motion-related behavior respects the user's
accessibility preference.

It is intended to prevent regressions where animations continue running
despite `prefers-reduced-motion: reduce`.

## Scope

This submission focuses on testing and demonstrating reduced-motion behavior.
It does not modify the EaseMotion core implementation.