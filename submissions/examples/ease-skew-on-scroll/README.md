# ease-skew-on-scroll

Closes #20526 — Elements skew forward when scrolling down and tilt
back when scrolling up, giving the page a cinematic momentum feel.

## How It Works

| Step | Detail |
|------|--------|
| JS detects scroll direction | Compares currentY vs lastY each frame |
| Velocity threshold | Minimum 2px delta to avoid micro-jitter |
| Class toggling | Adds skew-down / skew-up / skew-none |
| CSS transition | cubic-bezier(0.25, 0.46, 0.45, 0.94) for smooth snap |
| Auto-reset | 180ms after scroll stops — returns to neutral |

## CSS Classes

| Class | Effect |
|-------|--------|
| ease-skew-on-scroll | Base class — enables the effect |
| skew-subtle | 1.5deg — gentle hint |
| (default) | 3deg — standard momentum |
| skew-strong | 6deg — bold / hero sections |

## Files
- demo.html - live scroll demo with cards, strips, stats, image grid
- style.css  - all skew utilities and demo styles
- README.md  - this file

## Features
- Scroll direction detection via rAF loop
- 3 intensity variants: subtle / normal / strong
- Velocity threshold prevents micro-jitter
- Auto-reset to neutral when scroll stops
- Scroll progress bar
- Debug panel showing direction, scrollY, velocity, skew angle
- prefers-reduced-motion respected