# Core Changes Proposal: Issue #20368

## Problem Description

Issue [#20368](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20368) reports that the offline connection status banner references undefined `ease-pulse` keyframes.

**The bug** is in `components/connection-status.css` on line 20:

```css
.ease-connection-status.is-offline {
  transform: translateY(0);
  background: #ef4444;
  color: #fff;
  animation: ease-pulse 2s infinite;
}
```

The animation name `ease-pulse` does not exist anywhere in the framework. The actual keyframe is defined in `core/animations.css` on line 211 as:

```css
@keyframes ease-kf-pulse {
```

All framework keyframes follow the `ease-kf-*` naming convention (e.g., `ease-kf-pulse`, `ease-kf-fade-in`, `ease-kf-slide-up`). The component uses the unprefixed name `ease-pulse` which does not match any keyframe, so the offline banner does not pulse.

## Proposed Fix

Change `ease-pulse` to `ease-kf-pulse` on line 20 of `components/connection-status.css`.

**Change from:**
```css
animation: ease-pulse 2s infinite;
```

**Change to:**
```css
animation: ease-kf-pulse 2s infinite;
```

## Why this is submitted here

Per the `CONTRIBUTING.md` policy and Core Framework Protection, this fix is proposed as a formal submission in the `submissions/` directory rather than modifying `components/connection-status.css` directly.

Fixes #20368
