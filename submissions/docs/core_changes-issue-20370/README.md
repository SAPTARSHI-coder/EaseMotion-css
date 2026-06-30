# Core Changes Proposal: Issue #20370

## Problem Description

Issue [#20370](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20370) reports that `components/announce-bar.css` uses a utility class name as its animation keyframe name.

**The bug** is in `components/announce-bar.css` on line 9:

```css
.ease-announce-bar {
  position: relative;
  padding: 0.75rem 1rem;
  background: #6c63ff;
  color: #fff;
  text-align: center;
  font-size: 0.875rem;
  animation: ease-slide-down 0.3s ease;
  ...
}
```

The animation name `ease-slide-down` is a **utility class** (defined in `core/animations.css` line 835), not a `@keyframes` rule. The actual slide-down keyframe is named `ease-kf-slide-down` (defined in `core/animations.css` line 48).

Since `@keyframes ease-slide-down` does not exist anywhere in the framework, the announcement bar appears without its intended entrance motion.

## Proposed Fix

Change `ease-slide-down` to `ease-kf-slide-down` on line 9 of `components/announce-bar.css`, and add `animation-fill-mode: both` so the element starts hidden before the animation runs:

```css
.ease-announce-bar {
  ...
  animation: ease-kf-slide-down 0.3s ease both;
  ...
}
```

Also add a `prefers-reduced-motion` guard at the end of the file so the entrance animation is disabled for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-announce-bar {
    animation: none;
  }
}
```

## Why this is submitted here

Per the `CONTRIBUTING.md` policy and Core Framework Protection, this fix is proposed as a formal submission in the `submissions/` directory rather than modifying `components/announce-bar.css` directly.

## Files changed

| File                                 | Change                                              |
| ------------------------------------ | --------------------------------------------------- |
| `components/announce-bar.css` line 9 | `ease-slide-down` → `ease-kf-slide-down`            |
| `components/announce-bar.css` (end)  | Add `@media (prefers-reduced-motion: reduce)` block |

Fixes #20370
