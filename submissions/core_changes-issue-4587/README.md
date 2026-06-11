# Core Changes — Issue #4587: ease-typewriter-loop invisible under prefers-reduced-motion

## Overview
Fixes `.ease-typewriter-loop` going invisible when `prefers-reduced-motion: reduce` is active due to `0.01ms` duration collapsing the `steps()` animation.

## Problem
The `@media (prefers-reduced-motion: reduce)` block in both `easemotion/misc.css` and `core/animations.css` sets `animation-duration: 0.01ms !important` on `.ease-typewriter-loop`. The typewriter uses `steps(var(--ease-typewriter-steps), end)` for its typing effect. With a 0.01ms duration:

1. All 12 steps complete in a single frame
2. The typing phase (width 0 → 12ch) and deleting phase (12ch → 0) both happen instantly
3. The element appears either blank or flashes invisibly

## Fix
Instead of collapsing the duration, the reduced-motion rule should:
1. **Stop the animation**: `animation: none !important`
2. **Show full text**: `width: var(--ease-typewriter-length, 12ch) !important`
3. **Hide the cursor**: `border-right-color: transparent !important`
4. **Prevent clipping**: `overflow: visible !important`

## Affected Files
- `easemotion/misc.css` — remove `.ease-typewriter-loop` from generic `0.01ms` list and add dedicated rule
- `core/animations.css` — same treatment for its reduced-motion block on `[class*="ease-"]`

## Verification
Open `demo.html`. Click "enable reduce-motion" to simulate the fix. The typewriter shows its full text immediately instead of going blank.

## Labels
- `bug`, `animation`, `GSSoC-26`
