# Animated Odometer Counter

Animated number counters that count up from zero to a target value on load using `requestAnimationFrame` with cubic ease-out. Three counters show different values (downloads, users, stars) with different durations. Numbers use tabular-nums for stable layout.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser to see the counters animate on load.

## Accessibility notes

The final number is rendered as text for screen readers. The animation is purely decorative. Reduced motion disables the bump effect and transition.
