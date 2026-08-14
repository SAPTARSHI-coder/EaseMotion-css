# Pulsating Wave Hover Effects

A pure CSS implementation of smooth, accessible, and performant hover effects featuring a **Pulsating Wave** aesthetic — radiating ring animations triggered purely on hover, like sonar pulses or signal beacons.

## What it does

Provides three sub-components, each with a distinct wave behaviour:

- **Wave Buttons** — Pill-shaped buttons that emit two staggered expanding ring waves on hover, with a neon glow that intensifies.
- **Wave Cards** — Content cards with a sonar-style expanding border ring on hover, plus an icon that bounces with spring physics.
- **Wave Beacon Icons** — Circular icon buttons that emit three staggered ring waves on hover, perfect for status indicators and live signals.

All components use CSS custom properties for full theming, dark/light mode via `prefers-color-scheme`, `prefers-reduced-motion` respect, and `will-change` / `translateZ(0)` for hardware-accelerated GPU compositing.

## How to use it

1. Include `style.css` in your project.

**Wave Button:**
```html
<button class="wave-btn wave-btn-blue">Deploy</button>
```

**Wave Card:**
```html
<div class="wave-card wave-card-violet" tabindex="0" role="article">
  <div class="wave-card-icon">💠</div>
  <h3>Pulse</h3>
  <p>Frequency modulated</p>
</div>
```

**Wave Beacon:**
```html
<button class="wave-beacon wave-beacon-rose" aria-label="Alert active">⚠️</button>
```

## Available colour variants

| Suffix | Colour |
|---|---|
| `-blue`    | Electric Blue |
| `-violet`  | Deep Violet |
| `-rose`    | Signal Rose |
| `-emerald` | Active Green |
| `-amber`   | Warning Amber |

## Why it fits EaseMotion CSS

This component delivers dramatic, energetic motion — expanding pulsating rings — entirely through CSS `@keyframes`, `::before` / `::after` pseudo-elements, and staggered `animation-delay`. No JavaScript event listeners, no canvas, no SVG. It is a textbook EaseMotion pattern: one class added to your element, instant premium motion.
