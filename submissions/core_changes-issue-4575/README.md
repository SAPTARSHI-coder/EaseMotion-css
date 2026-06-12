# Core Changes — Issue #4575: `@keyframes ease-float` timing conflict

## Overview
Fixes `@keyframes ease-float` in `core/animations.css` — the keyframe doesn't follow the `ease-kf-*` naming convention, and the `.ease-float` class uses a hardcoded `3s ease-in-out infinite` instead of design tokens.

## Problem
1. **Naming:** keyframe is `ease-float` instead of `ease-kf-float` (all other keyframes use `ease-kf-*`)
2. **Duration:** hardcoded `3s` — not themeable via `--ease-speed-*` tokens
3. **Easing:** hardcoded `ease-in-out` — not themeable via `--ease-ease-*` tokens
4. **Accessibility:** missing `@media (prefers-reduced-motion: reduce)` block

## Fix
- Rename to `ease-kf-float`
- Use `var(--ease-speed-slow)` and `var(--ease-ease)`
- Add reduced-motion guard

## Affected Files
- `core/animations.css` — update `@keyframes ease-float` → `ease-kf-float` and `.ease-float` class
- `easemotion/float.css` — doesn't exist; consider creating it for modularity (separate issue #4579 pattern)

## Labels
- `bug`, `enhancement`, `GSSoC-26`
