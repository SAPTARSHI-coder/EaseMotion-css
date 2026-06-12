# Feature #6008: Add ease-neon text glow effect component

## Description
Add neon text glow utility classes that were listed in the cheatsheet (#5716). Includes a base glow class, color variants, and a border glow class.

## Proposed Implementation
Add to `core/animations.css`:
- `.ease-neon` — multi-layer text-shadow glow
- `.ease-neon-pink/blue/green/purple` — color variants
- `.ease-neon-border` — matching box-shadow glow

## Files
- `style.css` — all neon classes
- `demo.html` — interactive demo on dark background
