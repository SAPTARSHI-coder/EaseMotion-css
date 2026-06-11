# Core Changes — Issue #4580: Duplicate `@keyframes ease-kf-float` between misc.css and core/animations.css

## Overview
Both `easemotion/misc.css` and `core/animations.css` define a `.ease-float` class and a float keyframe, but with different keyframe names and slightly different class properties. When both files are loaded, the last-loaded definition silently wins.

## Problem
| Aspect | `easemotion/misc.css` | `core/animations.css` |
|--------|----------------------|----------------------|
| Keyframe name | `ease-kf-float` ✅ (correct prefix) | `ease-float` ❌ (missing `-kf-`) |
| Duration | `3s` | `3s` |
| Timing | `ease-in-out` | `ease-in-out` |
| content-visibility | `auto` | missing |
| contain-intrinsic-size | `1px` | missing |

Both keyframes produce the same visual motion (translateY: 0 → -10px → 0), but the different names mean both are loaded into the stylesheet. The `.ease-float` class in the file that loads last will reference its own keyframe, making behavior dependent on import order.

## Fix
- Use `@keyframes ease-kf-float` as the canonical keyframe name (matches framework convention)
- Replace hardcoded `3s ease-in-out` with `var(--ease-speed-slow) var(--ease-ease)` (design tokens)

## Affected Files
- `easemotion/misc.css` — already uses `ease-kf-float`; optionally switch to design tokens
- `core/animations.css` — rename `@keyframes ease-float` → `ease-kf-float` and align `.ease-float` class

## Labels
- `bug`, `animation`, `GSSoC-26`
