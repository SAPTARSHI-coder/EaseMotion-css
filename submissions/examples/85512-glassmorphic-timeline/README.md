# Floating Vertical Timeline — Glassmorphism

A responsive floating vertical timeline built with pure HTML and CSS using a modern glassmorphism visual style.

The component combines translucent surfaces, backdrop blur, gradient backgrounds, floating decorative elements, timeline states, and smooth CSS animations.

## Features

- Glassmorphism UI
- Translucent timeline cards
- `backdrop-filter` blur
- Floating decorative background orbs
- Animated active timeline node
- Completed, current, and upcoming states
- Animated progress indicator
- Smooth hover elevation
- Responsive desktop, tablet, and mobile layouts
- CSS custom properties for theming
- `prefers-reduced-motion` support
- Semantic HTML
- ARIA progressbar
- Pure HTML and CSS
- No JavaScript

## Glass Effect

The cards use translucent backgrounds, borders, shadows, and backdrop blur:

```css
.timeline-card {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}