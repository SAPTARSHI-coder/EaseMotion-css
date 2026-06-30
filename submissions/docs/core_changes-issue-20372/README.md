# Core Changes Proposal: Issue #20372

## Problem Description

Issue [#20372](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20372) reports that the `.ease-hover-pulse-glow` utility references undefined `@keyframes ease-kf-hover-pulse-glow`.

**The bug** is in `core/animations.css` at line 1379:

```css
.ease-hover-pulse-glow {
  z-index: 1;
  position: relative;
  transform-origin: center;
  transition:
    transform var(--ease-speed-medium) var(--ease-ease-bounce),
    filter var(--ease-speed-medium) var(--ease-ease-bounce);
}

.ease-hover-pulse-glow:hover {
  animation: ease-kf-hover-pulse-glow var(--ease-speed-medium)
    var(--ease-ease-bounce) forwards;
}
```

The animation name `ease-kf-hover-pulse-glow` does not exist — no `@keyframes` rule defines it anywhere in `core/`, `components/`, or modular stylesheets. On hover, no pulse or glow effect occurs.

## Proposed Fix

Add the missing `@keyframes ease-kf-hover-pulse-glow` definition to `core/animations.css`. The keyframe should combine a scale pulse with a glow via `filter: brightness()` and a subtle `box-shadow`:

```css
@keyframes ease-kf-hover-pulse-glow {
  0% {
    transform: scale(1);
    filter: brightness(1);
    box-shadow: 0 0 0 0 rgba(108, 99, 255, 0);
  }
  50% {
    transform: scale(1.08);
    filter: brightness(1.2);
    box-shadow: 0 0 20px 4px rgba(108, 99, 255, 0.35);
  }
  100% {
    transform: scale(1);
    filter: brightness(1);
    box-shadow: 0 0 10px 2px rgba(108, 99, 255, 0.15);
  }
}
```

This creates a combined pulse+glow effect:

- **Pulse**: scale up to 1.08 at midpoint, then settle back
- **Glow**: `brightness(1.2)` boosts perceived glow, `box-shadow` expands outward in sync

Also add a `prefers-reduced-motion` guard so the animation is suppressed for accessibility.

## Why this is submitted here

Per the `CONTRIBUTING.md` policy and Core Framework Protection, this fix is proposed as a formal submission in the `submissions/` directory rather than modifying `core/animations.css` directly.

## Files changed

| File                                    | Change                                             |
| --------------------------------------- | -------------------------------------------------- |
| `core/animations.css` (after line 1380) | Add `@keyframes ease-kf-hover-pulse-glow` block    |
| `core/animations.css` (end of file)     | Add `@media (prefers-reduced-motion: reduce)` rule |

Fixes #20372
