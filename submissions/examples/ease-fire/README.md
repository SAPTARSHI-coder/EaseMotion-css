# ease-fire — Fire Flicker & Glow Utility

**Fixes:** Issue #11903

## Overview

A pure CSS animation that simulates the organic, irregular flickering of a flame. It combines jittery opacity shifts, slight scale variations, and a pulsing warm orange/red glow (`box-shadow`) to create a "fire" effect.

## Usage

```html
<!-- Emergency Alert — flickers infinitely -->
<div class="alert ease-fire">🔥 EMERGENCY ALERT</div>

<!-- Fire Button — glows on hover -->
<button class="ease-fire ease-fire-hover">Launch System</button>

<!-- Wild Fire — fast and intense -->
<div class="ease-fire ease-fire-wild">CRITICAL ERROR</div>

<!-- Calm Fire — slow and atmospheric -->
<div class="ease-fire ease-fire-calm">Warm Ambience</div>
```

## Variants

| Class              | Description                              |
| ------------------ | ---------------------------------------- |
| `.ease-fire`       | Organic flicker and glow (default)       |
| `.ease-fire-hover` | Triggers only on `:hover`                |
| `.ease-fire-wild`  | Faster duration (`0.8s`) and larger glow |
| `.ease-fire-calm`  | Slower duration (`4s`) and smaller glow  |

## Customization

You can adjust the fire colors or glow size using CSS variables:

```css
.blue-fire {
  --ease-fire-color-core: #00ccff; /* Cyan core */
  --ease-fire-color-glow: #0066ff; /* Blue glow */
  --ease-fire-glow-size: 20px;
}
```

## Technical Design

The animation uses 10 irregular keyframe stops (e.g., `7%`, `23%`, `42%`) rather than standard increments. This "jitter" prevents the animation from feeling too mechanical, mimicking the unpredictable nature of fire.

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .ease-fire {
    animation: none !important;
    transform: none !important;
    box-shadow: 0 0 10px var(--ease-fire-color-glow) !important;
  }
}
```

The flickering animation is disabled for users with motion sensitivities, falling back to a static glow.

## Acceptance Criteria

- [x] Irregular opacity keyframes at many stops (10 stops included)
- [x] Warm orange/red box-shadow glow
- [x] Scale slightly varies (`0.96` to `1.04`)
- [x] Infinite loop
- [x] `prefers-reduced-motion` fallback included
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified
