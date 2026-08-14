# Animated Bounce In Left (ease-bounce-in-left-pr)

## What does this do?

Provides a physics-like, elastic entrance animation that slides elements in from the left and lets them overshoot their target position before settling.

## How is it used?

Add the base class `.ease-bounce-in-left` and any desired speed, distance, or elasticity variants to an HTML element:

```html
<!-- Default bounce-in-left animation -->
<div class="ease-bounce-in-left">Your content here</div>

<!-- Fast speed variant with a short slide distance -->
<div class="ease-bounce-in-left bounce-fast bounce-dist-short">
  Your content here
</div>

<!-- Extreme overshoot elasticity variant with a slow duration -->
<div class="ease-bounce-in-left bounce-extreme bounce-slow">
  Your content here
</div>
```

### Class Options

- **Base Class**: `.ease-bounce-in-left`
- **Speed Modifiers**: `.bounce-fast` (0.5s), `.bounce-slow` (1.25s)
- **Distance Modifiers**: `.bounce-dist-short` (-50%), `.bounce-dist-long` (-200%)
- **Elasticity Modifiers**: `.bounce-soft` (lower overshoot), `.bounce-extreme` (higher overshoot, snappier recoil)

### Custom Tokens

Customize values directly in your stylesheet or inline styles:

- `--ease-bounce-distance`: Change the starting position offset (default: `-120%`)
- `--ease-bounce-duration`: Adjust the speed of the entrance (default: `0.85s`)
- `--ease-bounce-easing`: Override the springy bezier curve (default: `cubic-bezier(0.34, 1.56, 0.64, 1)`)

## Why is it useful?

It fits EaseMotion CSS by extending the springy entrance animation family (`ease-bounce-in-down` etc.) with a highly customizable and parameterized left-aligned variant. By decoupling keyframe states and using custom properties inside the springy `cubic-bezier(0.34, 1.56, 0.64, 1)` easing curve, it avoids hardcoding intermediate coordinate frames, resulting in highly performant and flexible GPU-accelerated motion that adapts perfectly to side navigation menus, list staggered entry feeds, and modal entries.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript required for core functionality)

## Preview

Open `demo.html` directly in your browser to interact with the sandbox and staggered pop-in feeds.

## Contribution Notes

- Class naming suffix handled by the contributor (`-pr` for Pratyush Panda)
- Maintainer will rename classes to standard `ease-*` conventions during final core integration.
