# Fade-In Pricing Table — SaaS Showcase

A pricing table where each card fades in from a slightly offset position. Cards start with `opacity: 0` and `translateY(14px)`, then slide up and fade into place with staggered timing.

## How It Works

Three pricing cards use a `@keyframes` animation that transitions from transparent and slightly below to fully visible at their natural position. Each card has a different `animation-delay` so they enter one after another — a subtle cascade effect.

The fade-in is intentionally understated compared to blur or scale entrances. It gives a clean, professional feel that works well for pricing sections where you don't want the animation to distract from the content.

## Customization

- Change `--fip-teal` for a different accent color
- Adjust `animation-delay` values for faster or slower staggering
- Modify the initial `translateY()` for more vertical offset
- The featured card has extra top padding to make room for the ribbon badge

## Notes

- Pure HTML + CSS, no JavaScript
- `prefers-reduced-motion` disables the entrance animation
- Responsive grid adapts to screen width
- Featured card highlighted with accent border and shadow
