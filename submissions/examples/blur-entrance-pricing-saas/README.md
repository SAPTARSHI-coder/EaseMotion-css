# Blur-Entrance Pricing Table — SaaS Showcase

A pricing table where each card blurs in from a frosted state. Cards start with `filter: blur(12px)`, reduced opacity, and a downward offset, then resolve into focus with a staggered animation.

## How It Works

Three cards use a `@keyframes` animation that transitions from `blur(12px) opacity: 0 translateY(20px)` to `blur(0) opacity: 1 translateY(0)`. Each card has a different `animation-delay` so they enter in sequence — left to right, one after another.

The blur creates a soft reveal effect, like cards materializing through fog. The staggered timing gives the entrance a rhythmic feel without being distracting.

## Customization

- Change `--bep-indigo` for a different accent color
- Adjust the `animation-delay` offsets for faster or slower staggering
- Modify the initial `blur()` and `translateY()` values for different entrance intensity
- The featured card has a higher `padding-top` to accommodate the badge

## Notes

- Pure HTML + CSS, no JavaScript
- `prefers-reduced-motion` disables the entrance animation while keeping cards fully visible
- Responsive grid adapts from 3 columns to fewer on smaller screens
- Featured card highlighted with accent border and shadow
