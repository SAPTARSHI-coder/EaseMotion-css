# Core Changes Proposal: Issue #20369

## Problem Description

Issue [#20369](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20369) reports that `components/compare-table.css` references undefined `ease-icon-pop` keyframes.

**The bug** is in `components/compare-table.css` on line 80:

```css
.ease-icon-check,
.ease-icon-cross {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  animation: ease-icon-pop 0.3s ease both;
}
```

The animation name `ease-icon-pop` does not exist anywhere in the framework. The file only defines `@keyframes ease-icon-draw` (used by the pseudo-elements for the drawing stroke effect), but the parent icon container references `ease-icon-pop` which has no matching keyframe rule. This means the icons appear without their intended pop-in scale animation.

## Proposed Fix

Add the missing `@keyframes ease-icon-pop` definition to `components/compare-table.css`. The keyframe should provide a scale pop-in effect that complements the drawing stroke animation on the pseudo-elements:

```css
@keyframes ease-icon-pop {
  from {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.15);
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
```

This creates a pop-in effect: the icon scales up from 0, overshoots slightly to 1.15, then settles at 1 — all while fading in. It pairs naturally with `ease-icon-draw` which fades in the stroke pseudo-elements.

## Why this is submitted here

Per the `CONTRIBUTING.md` policy and Core Framework Protection, this fix is proposed as a formal submission in the `submissions/` directory rather than modifying `components/compare-table.css` directly.

Fixes #20369
