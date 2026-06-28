# React Animated Avatar / Profile Card (#22936)

This submission fulfills Issue **#22936** by delivering a grid of premium animated profile cards showcasing zoom-in entry, avatar pulse, multi-layer staggered reveals, and an interactive follow toggle.

## Animation Inventory

| Feature | EaseMotion / CSS Technique | Timing |
|---------|---------------------------|--------|
| Card zoom-in entry | `.ease-zoom-in .ease-duration-normal` | `index × 200ms` stagger |
| Avatar ring | `.ease-pulse` continuous | Immediate — draws eye first |
| Name / handle | `.ease-fade-in .ease-duration-normal` | 150ms after card |
| Bio text | `.ease-fade-in .ease-duration-slow` | 250ms after card |
| Stat numbers | `.ease-slide-up .ease-duration-fast` | `300ms + i×100ms` |
| Skill badges | `.ease-slide-up .ease-duration-fast` | `500ms + i×60ms` cascade |
| Social links | `.ease-fade-in .ease-duration-normal` | 600ms after card |
| Card hover | `.ease-hover-scale` | On mouse enter |
| Follow button | `.ease-hover-glow` | On mouse enter |
| Follow toggle label | `.ease-fade-in .ease-duration-fast` via React `key` | On click |

## Architecture Highlights

### `.ease-zoom-in` as the Primary Entry
Unlike previous components that used `.ease-slide-up`, profile cards feel most natural when they scale from the center outward. The `.ease-zoom-in` class creates this `scale(0.8) → scale(1)` entrance, which is particularly effective for card grids since each card feels like it's "popping" into existence.

### Multi-Layer Stagger (6 distinct delay tiers)
The card entry (0ms) → name (150ms) → bio (250ms) → stats (300–500ms) → skills (500–800ms) → links (600ms) creates a cinematic reveal sequence where each layer of information arrives in a natural reading order. This is how premium onboarding flows feel.

### Follow Toggle via React `key` Cross-Fade
The `<span key={String(following)}>` wrapper forces React to create a new DOM node on every follow toggle. The `.ease-fade-in .ease-duration-fast` class on this fresh node produces a clean label cross-fade between `+ Follow` and `✔ Following` without any manual animation state tracking.

## How to View
Double-click `demo.html` — React 18 + Babel via CDN, **no build step required**.
