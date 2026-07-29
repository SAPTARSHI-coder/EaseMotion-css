# Animated Zoom In Down (ease-zoom-in-down-pr)

## What does this do?

Provides a smooth entrance animation where an element scales up from a smaller size while sliding down into place, fading in concurrently.

## How is it used?

Add the base class `.ease-zoom-in-down` and any desired speed, scale, or distance variants to an HTML element:

```html
<!-- Default zoom-in-down animation -->
<div class="ease-zoom-in-down">Your content here</div>

<!-- Fast speed variant with a short slide distance and subtle scale -->
<div class="ease-zoom-in-down zoom-fast zoom-translate-short zoom-scale-subtle">
  Your content here
</div>

<!-- Slow duration with an intense scale scaling up from 0.3 -->
<div class="ease-zoom-in-down zoom-scale-intense zoom-slow">
  Your content here
</div>
```

### Class Options

- **Base Class**: `.ease-zoom-in-down`
- **Speed Modifiers**: `.zoom-fast` (0.25s), `.zoom-slow` (0.75s)
- **Scale Modifiers**: `.zoom-scale-subtle` (scale starts from 0.8), `.zoom-scale-intense` (scale starts from 0.3)
- **Distance Modifiers**: `.zoom-translate-short` (-15px), `.zoom-translate-long` (-80px)

### Custom Tokens

Customize values directly in your stylesheet or inline styles:

- `--ease-zoom-scale`: Change the initial scale ratio (default: `0.5`)
- `--ease-zoom-translate`: Adjust the initial vertical offset (default: `-40px`)
- `--ease-zoom-duration`: Adjust the speed of the entrance (default: `0.45s`)
- `--ease-zoom-easing`: Override the transition timing curve (default: `cubic-bezier(0.16, 1, 0.3, 1)`)

## Why is it useful?

It fits EaseMotion CSS's philosophy by offering a human-readable, lightweight micro-interaction designed specifically for dropdown menus, popovers, contextual tooltips, and header notifications. By decoupling layout offsets and scales into CSS custom variables inside the keyframes, it allows developers to quickly fine-tune the size and slide distance locally, delivering smooth, GPU-accelerated entrance effects with zero JavaScript footprint.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript required for core functionality)

## Preview

Open `demo.html` directly in your browser to interact with the sandbox dropdowns and staggered metrics.

## Contribution Notes

- Class naming suffix handled by the contributor (`-pr` for Pratyush Panda)
- Maintainer will rename classes to standard `ease-*` conventions during final core integration.
