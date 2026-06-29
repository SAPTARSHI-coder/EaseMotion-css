# Scroll Stagger Animations — Issue #30315

Pure CSS staggered entry animations for lists and grids. Each child element animates in sequence with a configurable delay.

## Classes

| Class | Effect |
|-------|--------|
| `.ease-stagger` | Enables stagger on container (fade-up by default) |
| `.ease-stagger-fade-up` | Fade in + slide up |
| `.ease-stagger-fade-down` | Fade in + slide down |
| `.ease-stagger-fade-left` | Fade in + slide right-to-left |
| `.ease-stagger-fade-right` | Fade in + slide left-to-right |
| `.ease-stagger-scale` | Pop-in scale from 0.8 |
| `.ease-stagger-zoom` | Zoom in from 1.15 |
| `.ease-stagger-delay-fast` | 0.04s delay per item |
| `.ease-stagger-delay-slow` | 0.15s delay per item |
| `.ease-stagger-duration-fast` | 0.25s animation |
| `.ease-stagger-duration-slow` | 0.6s animation |

## CSS Variables

- `--ease-stagger-delay` (default 0.08s)
- `--ease-stagger-duration` (default 0.4s)
- `--ease-stagger-easing` (default ease-out)

Supports up to 20 children via nth-child selectors. Respects `prefers-reduced-motion: reduce`.
