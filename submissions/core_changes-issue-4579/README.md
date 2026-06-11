# Core Changes — Issue #4579: `.ease-wave` missing modular file

## Overview
The `.ease-wave` animation class is defined in `core/animations.css` but has no corresponding modular file at `easemotion/wave.css`. This submission provides the missing modular file.

## Problem
All other animation classes have modular files in `easemotion/` (e.g., `bounce.css`, `zoom.css`, `shake.css`). The wave animation is only in the core bundle, which means users who want only the wave animation must include the entire `core/animations.css`.

## Fix
Create `easemotion/wave.css` (provided in `style.css`) with:
- `@keyframes ease-kf-wave` (moved from core)
- `.ease-wave` class (moved from core)
- `@media (prefers-reduced-motion: reduce)` guard
- Design-token-driven duration and easing

## Affected Files
- `easemotion/wave.css` — **create** this new file from `style.css`
- `core/animations.css` — optionally remove the wave keyframe/class to keep single source of truth

## Labels
- `enhancement`, `GSSoC-26`
