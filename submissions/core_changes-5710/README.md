# Core Fix: Missing `@keyframes ease-kf-zoom-out`

**Issue:** https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5710

## Problem

The `.ease-zoom-out` class in `core/animations.css` references `@keyframes ease-kf-zoom-out`, but this keyframe does not exist in any file imported by the main entry point `easemotion.css`. The keyframe is only defined in `easemotion/zoom.css`, which is a standalone modular import — not included in the main bundle.

When a user applies `class="ease-zoom-out"` using the standard `easemotion.css` link, the animation silently fails because the browser cannot find the referenced keyframe.

## Proposed Fix

Add the missing `@keyframes ease-kf-zoom-out` block to `core/animations.css`, right after the existing `ease-kf-zoom-in` keyframe:

```css
@keyframes ease-kf-zoom-out {
  from {
    transform: scale(1.5);
  }

  to {
    transform: scale(1);
  }
}
```

This matches the existing definition in `easemotion/zoom.css` and ensures the zoom-out animation works regardless of which entry point is used.

## Files to Modify

- `core/animations.css` — add the `ease-kf-zoom-out` keyframe block

## Verification

After applying the fix:
1. Use `<div class="ease-zoom-out">` with any standard entry point
2. The element should animate from scale(1.5) → scale(1) on load
3. Run `npm test` — all 9 tests should pass, including the duplicate keyframe detection test
