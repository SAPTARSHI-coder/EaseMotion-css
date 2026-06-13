# Animation — Shimmer Overlay and Pop

## What does this do?
Adds two new animation utilities to the framework:
- `.ease-shimmer-overlay` — a full-element overlay that sweeps a
  gradient from left to right, useful for skeleton screens on
  cards
- `.ease-pop` — a quick scale-up + bounce entrance animation,
  useful for badges, notifications, and confirmations

## How is it used?
Apply the class to an element:

    <div class="ease-card ease-shimmer-overlay">Loading...</div>
    <span class="ease-badge ease-pop">NEW</span>

## Why is it useful?
The framework has `.ease-skeleton-shimmer` (uses background
animation) and `.ease-bounce-in` (heavy scale-up), but no
overlay-style shimmer and no quick pop. Both fill common UI
patterns.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser to see both animations.

## Contribution Notes
- Pure CSS addition
- Respects `prefers-reduced-motion`
