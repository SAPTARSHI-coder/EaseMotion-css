# Core Changes — Issue #4569: `.ease-hover-glow` divergence between modular and core files

## Overview
Fixes the CSS drift between `easemotion/hover.css` and `core/animations.css` for the `.ease-hover-glow` class.

## Problem
The same `.ease-hover-glow` class is defined in two files with different values:

| Aspect | `easemotion/hover.css` | `core/animations.css` |
|--------|-----------------------|----------------------|
| 2nd drop-shadow | `16px rgba(108,99,255,0.45)` | `20px rgba(108,99,255,0.30)` |
| `:focus-visible` | Included | **Missing** |
| `box-shadow: none` | **Missing** | Included |

Since both files share the `@layer easemotion-utilities` layer, the definition that loads last wins — making behavior unpredictable.

## Fix
Merges both into a single unified definition:
- Uses the more refined drop-shadow from `core/animations.css`
- Includes `:focus-visible` from `easemotion/hover.css`
- Includes `box-shadow: none` from `core/animations.css`

## Affected Files (maintainer copies to both)
- `easemotion/hover.css` — replace `.ease-hover-glow` block
- `core/animations.css` — replace `.ease-hover-glow` block

## Labels
- `bug`, `level:beginner`, `GSSoC-26`
