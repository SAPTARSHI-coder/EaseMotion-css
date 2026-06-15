# Fix: Badges Component — Documentation Header & Animation Iteration Variable

## Problem
1. `components/badges.css` has no file-level documentation header, unlike every other component file
2. The pulse animation on `.em-badge-pulse::after` hardcodes `infinite` instead of using `var(--ease-animation-iterations, infinite)`, so the global `prefers-reduced-motion` block in `easemotion.css` cannot suppress it

## Fix
1. Added a top-of-file documentation comment block before `@layer easemotion-components`
2. Changed `animation: ease-kf-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite` to `animation: ease-kf-ping 1.5s cubic-bezier(0, 0, 0.2, 1) var(--ease-animation-iterations, infinite)`

## Usage
Apply the changes in `components/badges.css`. The demo shows badges with the pulse variant working correctly.
