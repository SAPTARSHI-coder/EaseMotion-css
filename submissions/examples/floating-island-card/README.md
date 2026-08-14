# Floating Island Card

## What does this do?
This submission creates a premium floating card experience with layered shadows, subtle levitation, and depth-rich visuals for dashboards, product showcases, and modern UI hero sections.

## How is it used?
Apply the base structure to any card container and add the desired variant classes:

```html
<div class="ease-island ease-island-premium">
  <div class="ease-island-shadow"></div>
  <div class="island-content">
    <p class="label">Revenue</p>
    <h4>$248K</h4>
  </div>
</div>
```

## Why is it useful?
It fits EaseMotion CSS by combining reusable motion patterns with polished, animation-first styling that feels premium and lightweight without JavaScript.

## Features
- Floating motion animation
- Dynamic shadow layer
- Hover elevation and depth transitions
- Responsive layout for cards and hero sections
- Variants for glass, dark, hover, large, and premium moods

## Available classes
- `ease-island` — base floating card container
- `ease-island-shadow` — soft shadow layer for depth
- `ease-island-glass`, `ease-island-dark`, `ease-island-hover`, `ease-island-large`, `ease-island-premium` — visual variants

## Elevation customization
Tune the effect with custom properties such as:

```css
:root {
  --ease-island-radius: 30px;
  --ease-island-shadow: rgba(15, 23, 42, 0.18);
  --ease-island-height: 240px;
  --ease-island-float-distance: 10px;
  --ease-island-duration: 4.2s;
}
```

## CSS variable customization
The component also supports:
- `--ease-island-bg`
- `--ease-island-border`
- `--ease-island-transition`

## Browser compatibility
Works in modern evergreen browsers with support for transforms, gradients, and backdrop filters.

## Accessibility considerations
- Keeps text readable and high contrast where possible
- Respects `prefers-reduced-motion` by disabling floating animations
- Uses no JavaScript and remains usable with reduced motion and basic zoom settings
