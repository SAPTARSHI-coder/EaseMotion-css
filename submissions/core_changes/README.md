# Water Intake Fill Animation

This submission implements an animated water glass fill indicator for daily hydration tracking (Issue **#14027**).

## What It Does

A glass-shaped element fills with water color representing hydration progress. The water level rises with a smooth spring-like transition and a wave animation on the surface.

## Features

- Glass shape created with `clip-path: polygon()` for a tapered cup look
- Water fill animates with `cubic-bezier(0.34, 1.56, 0.64, 1)` spring easing
- Wave effect on water surface via animated `border-radius`
- Interactive buttons to add water in 250ml / 500ml increments
- Quick preset dots for 25%, 50%, 75%, 100% fill
- Reset button
- Real-time stats display (ml consumed, goal, percentage)
- `prefers-reduced-motion` disables animations

## Usage

```html
<div class="glass">
  <div class="water" style="height: 60%;">
    <div class="wave"></div>
  </div>
</div>
```

## Files

- `demo.html` — Interactive hydration tracker UI with glass, stats, and controls
- `style.css` — Glass shape, water fill, wave keyframes, responsive layout
- `README.md` — This documentation

## Key Classes

| Class | Description |
|-------|-------------|
| `.glass` | Cup-shaped container with clip-path and overflow hidden |
| `.water` | Fill element positioned at bottom, height controls level |
| `.wave` | Animated wave surface at top of water |
