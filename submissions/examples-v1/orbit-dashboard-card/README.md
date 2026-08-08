# Orbit Dashboard Card

## Component overview

This submission adds a futuristic dashboard card that places a central KPI at the heart of orbiting nodes, creating a polished, motion-rich visual for analytics, AI, and observability interfaces.

## Features

- Central KPI display
- Orbiting node animation
- Multiple orbit layers
- Responsive sizing
- Dashboard-ready presentation
- CSS-only implementation
- Reduced-motion and high-contrast accessibility support

## Available classes

- `.ease-orbit-card` — base dashboard card container
- `.ease-orbit-ring` — circular orbit layer
- `.ease-orbit-node` — orbiting indicator node
- `.ease-orbit-dark` — dark theme variant
- `.ease-orbit-glass` — glassmorphism variant
- `.ease-orbit-fast` — faster orbit animation
- `.ease-orbit-slow` — slower orbit animation
- `.ease-orbit-multi` — multi-ring layout

## Orbit customization

The orbit card uses CSS variables so the size, ring spacing, node size, and animation speed can be tuned without changing the markup:

```css
:root {
  --ease-orbit-size: 220px;
  --ease-orbit-ring-size: 132px;
  --ease-orbit-node-size: 12px;
  --ease-orbit-duration: 14s;
  --ease-orbit-bg: #f8fafc;
  --ease-orbit-border: rgba(99, 102, 241, 0.18);
  --ease-orbit-shadow: 0 24px 48px rgba(15, 23, 42, 0.12);
  --ease-orbit-radius: 24px;
  --ease-orbit-transition: 220ms ease;
}
```

## Example usage

```html
<div class="ease-orbit-card" style="--ease-orbit-size: 220px; --ease-orbit-ring-size: 140px; --ease-orbit-duration: 14s;">
  <div class="ease-orbit-ring">
    <span class="ease-orbit-node"></span>
  </div>
  <div class="orbit-core">
    <strong>AI Accuracy</strong>
    <span>98.7%</span>
  </div>
</div>
```

## Browser compatibility

The component uses standard CSS transforms and animation properties, so it works well in current evergreen browsers. The reduced-motion and forced-colors fallbacks help preserve accessibility.

## Accessibility considerations

The card keeps center content readable, provides high-contrast support, and disables motion when users prefer reduced motion.
