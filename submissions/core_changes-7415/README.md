# Core Changes — Issue #7415: CSS Bundle Optimization

## Overview

Audit the CSS bundle for unused keyframes, redundant vendor prefixes, duplicate rule blocks, and hardcoded timing values that duplicate CSS custom properties.

## Problem

The CSS has accumulated several issues:
1. Dead `@keyframes ease-kf-morph-card` with zero references
2. Keyframe name mismatch: `@keyframes ease-zoom-out` referenced as `ease-kf-zoom-out` (`.ease-zoom-out` animation is broken)
3. Redundant `-webkit-scroll-snap-type` prefix (unprefixed supported since Safari 15)
4. Hardcoded `cubic-bezier(0, 0, 0.2, 1)` instead of `var(--ease-ease-out)`

## Proposed Fixes

### 1. Remove unused keyframe — `core/animations.css`
Remove `@keyframes ease-kf-morph-card` block (lines 626-636). Zero references across the entire framework.

### 2. Fix keyframe name — `core/animations.css`
Rename `@keyframes ease-zoom-out` to `@keyframes ease-kf-zoom-out` (line 650) to match the reference in `.ease-zoom-out` class.

### 3. Remove redundant prefix — `core/utilities.css`
Remove `-webkit-scroll-snap-type` from `.ease-snap-x` (line 232) and `.ease-snap-y` (line 237).

### 4. Use CSS variables — `core/animations.css`, `components/badges.css`
Replace `cubic-bezier(0, 0, 0.2, 1)` with `var(--ease-ease-out)` in `.ease-ping` (animations.css:925) and `.ease-badge-pulse::after` (badges.css:61).

## Bundle Size Impact

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Minified bundle | 102,475 B | 102,160 B | **−315 B (−0.3%)** |
| `@keyframes` definitions | 58 | 57 | **−1** |
| `-webkit-` prefixed declarations | 40 | 38 | **−2** |
| Hardcoded `cubic-bezier()` values | 2 | 0 | **−2** |

## Affected Files

- `core/animations.css`
- `core/utilities.css`
- `components/badges.css`
- `easemotion.min.css` (regenerated)

## Labels

- enhancement
- performance
- bug
- GSSoC-26
