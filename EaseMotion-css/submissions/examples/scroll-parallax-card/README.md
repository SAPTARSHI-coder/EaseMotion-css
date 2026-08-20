# Scroll-Driven Parallax Card Animation

A CSS-only example demonstrating a scroll-driven parallax effect
using modern CSS animation features.

## Features

- Four visually distinct cards
- Different movement speeds for each card
- CSS scroll-driven animations
- No JavaScript
- No external dependencies
- Responsive layout
- Graceful fallback for unsupported browsers
- `prefers-reduced-motion` support
- No horizontal overflow

## How It Works

The cards use the CSS `animation-timeline: scroll()` property to
connect their animations to the page scroll position.

Each card has a different `animation-range`, causing the cards to
move through their animation at different points during scrolling.

The animation uses:

```css
animation-timeline: scroll();