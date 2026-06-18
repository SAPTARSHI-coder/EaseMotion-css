# Fix: Respect `prefers-reduced-motion` Globally

## Problem
Currently, EaseMotion CSS animations and transitions run regardless of the user's operating system settings for reduced motion. While some components have individual overrides, there is no global catch-all to ensure accessibility compliance (WCAG 2.1 guideline 2.3.3) for all users.

## Solution
This submission provides a global override using the universal selector `*` within a `@media (prefers-reduced-motion: reduce)` block. This ensures that:
1. All animation durations are set to a near-zero value (`0.01ms`).
2. All transition durations are set to a near-zero value (`0.01ms`).
3. Animation iteration counts are limited to 1.
4. Smooth scrolling is disabled.

## Files Included
- `demo.html`: A demonstration page with instructions on how to emulate reduced motion and verify that animations stop.
- `style.css`: The global CSS fix.
- `README.md`: This documentation.

## Related Issue
Fixes #11476

## Integration Note
For full project integration, it is recommended that the maintainer appends the contents of `style.css` to the end of `easemotion.css` or incorporates it into `core/base.css`.
