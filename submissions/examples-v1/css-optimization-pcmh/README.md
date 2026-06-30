# CSS Bundle Optimization — Issue #7415

## Overview

Audited the CSS bundle for unused keyframes, redundant vendor prefixes, and hardcoded timing values.

## Findings

### 1. Unused Keyframe

`@keyframes ease-kf-morph-card` in `core/animations.css` (line 626) — never referenced by any class.

### 2. Keyframe Name Bug

`@keyframes ease-zoom-out` — named without `-kf-` infix, but `.ease-zoom-out` references `ease-kf-zoom-out`. Animation is broken.

### 3. Redundant Vendor Prefix

`-webkit-scroll-snap-type` on `.ease-snap-x`/`.ease-snap-y` — unprefixed since Safari 15.

### 4. Hardcoded Timing Curves

`cubic-bezier(0, 0, 0.2, 1)` used twice instead of `var(--ease-ease-out)`.

## Bundle Size Impact

| Metric            | Before    | After     | Change     |
| ----------------- | --------- | --------- | ---------- |
| Minified bundle   | 102,475 B | 102,160 B | **−315 B** |
| @keyframes        | 58        | 57        | **−1**     |
| -webkit- prefixes | 40        | 38        | **−2**     |

## Affected Files

- `core/animations.css`
- `core/utilities.css`
- `components/badges.css`
- `easemotion.min.css` (regenerated)
