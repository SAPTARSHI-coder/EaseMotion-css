# Animated Zoom In Right (ease-zoom-in-right-ag)

## What does this do?

Provides a smooth entrance animation where an element scales up from a smaller size while sliding to the right from the left side, fading in concurrently.

## How is it used?

Add the base class `.ease-zoom-in-right` and any desired speed, scale, or distance variants to an HTML element:

```html
<!-- Default zoom-in-right animation -->
<div class="ease-zoom-in-right">Your content here</div>

<!-- Fast speed variant with a short slide distance and subtle scale -->
<div class="ease-zoom-in-right zoom-fast zoom-translate-short zoom-scale-subtle">
  Your content here
</div>

<!-- Slow duration with an intense scale scaling up from 0.3 and a long translate distance -->
<div class="ease-zoom-in-right zoom-scale-intense zoom-translate-long zoom-slow">
  Your content here
</div>
```

### Class Options

- **Base Class**: `.ease-zoom-in-right`
- **Speed Modifiers**: `.zoom-fast` (0.25s), `.zoom-slow` (0.75s)
- **Scale Modifiers**: `.zoom-scale-subtle` (scale starts from 0.8), `.zoom-scale-intense` (scale starts from 0.3)
- **Distance Modifiers**: `.zoom-translate-short` (-15px), `.zoom-translate-long` (-80px)

### Custom Tokens

Customize values directly in your stylesheet or inline styles:

- `--ease-zoom-scale`: Change the initial scale ratio (default: `0.5`)
- `--ease-zoom-translate`: Adjust the initial horizontal offset (default: `-40px`)
- `--ease-zoom-duration`: Adjust the speed of the entrance (default: `0.45s`)
- `--ease-zoom-easing`: Override the transition timing curve (default: `cubic-bezier(0.16, 1, 0.3, 1)`)

## Why is it useful?

It aligns with EaseMotion CSS's philosophy of providing human-readable, lightweight, GPU-accelerated micro-interactions. Specifically designed for side navigation bars, list feeds, panel entries, and slide-in notifications, it decouples the animation parameters into CSS variables. This gives developers local design control without writing extra JavaScript or risking layout jitter, supporting a responsive and high-performance design.

## Tech Stack

- HTML
- CSS (no frameworks or libraries, fully compliant with modern web standard features)

## Preview

Open `demo.html` directly in your browser to interact with the sandbox and test speed, scale, and translate distance combinations.

## Contribution Notes

- Class naming suffix handled by the contributor (`-ag` for Antigravity)
- Maintainer will rename classes to standard `ease-*` conventions during final core integration.
