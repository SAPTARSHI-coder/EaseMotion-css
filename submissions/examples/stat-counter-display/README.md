# Stat Counter Display

A grid of stat counter cards that animate counting up from zero to their target values on page load. Each card displays a large numeric value and a label beneath. The counter uses `requestAnimationFrame` for smooth animation and `toLocaleString` for formatted numbers.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser. The four stat counters animate upward from 0 to their respective targets.

## Accessibility notes

Uses `font-variant-numeric: tabular-nums` for monospaced number alignment. Reduced motion does not apply since the animation is driven by JavaScript.
