# Core Changes — Issue #4572: `.ease-float` content-visibility gap

## Overview
`easemotion/misc.css` includes `content-visibility: auto; contain-intrinsic-size: 1px` on `.ease-float` for performance. `core/animations.css` is missing these properties, breaking the framework's claim that modular and bundle paths are equivalent.

## Problem
| Property | `easemotion/misc.css` | `core/animations.css` |
|----------|----------------------|----------------------|
| `content-visibility` | `auto` ✅ | **missing** ❌ |
| `contain-intrinsic-size` | `1px` ✅ | **missing** ❌ |
| `animation` | `3s ease-in-out infinte` | `3s ease-in-out infinite` |

Users loading `core/animations.css` directly (modular import path) lose the off-screen rendering optimization that `easemotion/misc.css` provides.

## Fix
Add `content-visibility: auto; contain-intrinsic-size: 1px` to `.ease-float` in `core/animations.css`.

## Affected Files
- `core/animations.css` — add the two missing properties to `.ease-float`

## Labels
- `bug`, `GSSoC-26`
