# Fix Plan for Issue #403

## Issue: `ease-fade-in` animation triggers layout reflow on every frame because it animates `width` and `height` instead of `transform: scale()`. Causes jank on mobile.

## Approach
The fix follows the steps described in issue #403.

## Changes to Make
1. Identify the affected code
2. Apply the fix as described
3. Add tests to prevent regression

*This file was auto-generated. Actual code changes should be made per the issue description.*
