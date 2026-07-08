# calc-size() Animation

## What
Smooth height transitions using `calc-size()` and `interpolate-size`. Two accordion-style toggle sections demonstrate the difference: one uses `calc-size(height, size)` for seamless auto-height animation, the other clamps to a fixed `max-height` without `calc-size()`.

## How
Both sections contain variable-height content. The `calc-size()` variant sets `height: calc-size(max-content, size)` with `interpolate-size: allow-keywords`, enabling smooth interpolation between `0` and `max-content`. The fallback variant uses a fixed `max-height` approach, showing the jarring overflow or truncation that `calc-size()` avoids.

## Why
Animating to `height: auto` has been a longstanding CSS pain point requiring JavaScript hacks or fixed max-heights. `calc-size()` solves this natively, making expand/collapse animations smooth, responsive to content, and entirely CSS-driven.
