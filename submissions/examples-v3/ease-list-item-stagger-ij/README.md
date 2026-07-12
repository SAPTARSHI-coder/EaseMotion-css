# Ease List Item Stagger

A beautiful list-entry effect where structural items smoothly slide in sequentially as they pass through the viewport container boundary using modern Scroll-Driven CSS animations.

## Features
- **Zero JavaScript:** Runs natively within browser render threads utilizing `animation-timeline: view()`.
- **Dynamic CSS Variable Staggering:** Sequential offset configurations are maintained cleanly via localized math variables (`--i`).
- **Fully Customizable:** Easily alter slide length, entry speed multipliers, and theme variations via custom root tokens.

## Mechanics
Instead of loading external intersection scripts, this component pairs `animation-timeline: view()` with a custom CSS variable index assigned within the markup:
```css
animation-range-start: cover calc(10% + (var(--i) * var(--stagger-delay-multiplier)));