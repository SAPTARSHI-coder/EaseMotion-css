# Kinetic Typography Wave

A standalone CSS animation that creates a wave-like motion across individual
characters of a heading.

## Features

- Individual character animation
- Staggered animation delays
- Vertical movement
- Subtle rotation and scaling
- Opacity transitions
- Responsive typography
- `prefers-reduced-motion` accessibility support
- No JavaScript
- No external libraries

## How it works

Each character is wrapped in its own `<span>` element. The character receives
an index through the `--i` CSS custom property.

The animation delay is calculated from that index:

```css
animation-delay: calc(var(--i) * -0.11s);