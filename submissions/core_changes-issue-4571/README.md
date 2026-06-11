# Core Changes — Issue #4571: Dead `@keyframes easeZoomIn` (scale 0.5)

## Overview
The file `submissions/examples/ease-zoom-in/style.css` contains `@keyframes easeZoomIn { from { transform: scale(0); ... } to { ... } }` that is **never referenced** by any framework class.

## Problem
There are two zoom-in keyframe definitions in the repo:
1. `@keyframes easeZoomIn` — in a community example, unused by any framework class
2. `@keyframes ease-kf-zoom-in` — in `easemotion/zoom.css` and `core/animations.css`, correctly used by `.ease-zoom-in`

## Fix
The dead `easeZoomIn` keyframe (and the example's `.ease-zoom-in` class referencing it) adds confusion. The example should either:
- Be removed, or
- Be updated to use `@keyframes ease-kf-zoom-in` and framework design tokens

## Affected Files
- `submissions/examples/ease-zoom-in/style.css` — review/remove dead keyframe
- `easemotion/zoom.css` — already correct (no changes needed)
- `core/animations.css` — already correct (no changes needed)

## Labels
- `bug`, `level:beginner`, `GSSoC-26`
