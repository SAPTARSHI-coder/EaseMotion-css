# Broken .ease-zoom-out animation references non-existent keyframe (Issue #8559)

## Problem

In `core/animations.css`:
- `@keyframes` is named `ease-zoom-out` (line 650)
- `.ease-zoom-out` class references `ease-kf-zoom-out` (line 678-679)

The name mismatch means the animation never plays.

## Fix

Rename the keyframe from `ease-zoom-out` to `ease-kf-zoom-out` to match the `-kf-` prefix convention used by every other keyframe in the framework.

## Files

- `style.css` — corrected keyframe name + zoom-out class with demo
- `demo.html` — interactive demo (click the box to test)
