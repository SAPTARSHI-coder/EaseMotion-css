# Animated Flip In Y (ease-flip-in-y-ag)

## What does this do?

Provides a true 3D vertical axis flip entrance animation where elements rotate into view on the Y-axis from a 90-degree angle, leveraging a perspective projection on the parent container to create physical depth.

## How is it used?

Apply the perspective helper class `.ease-3d-parent` on the parent container, and add the base class `.ease-flip-in-y` along with any desired speed, angle, or origin modifiers to the child element:

```html
<!-- Default 3D flip-in-y entrance -->
<div class="ease-3d-parent">
  <div class="ease-flip-in-y">Your card content here</div>
</div>

<!-- Fast flip open from the left edge with a reverse angle (-90deg) -->
<div class="ease-3d-parent" style="--ease-perspective: 800px;">
  <div class="ease-flip-in-y flip-fast flip-angle-reverse flip-origin-left">
    Your folding content here
  </div>
</div>
```

### Class Options

- **Parent Helper**: `.ease-3d-parent` (sets up the 3D perspective space)
- **Base Class**: `.ease-flip-in-y`
- **Speed Modifiers**: `.flip-fast` (0.35s), `.flip-slow` (1.0s)
- **Angle Modifiers**: `.flip-angle-reverse` (starts at `-90deg` instead of `90deg`), `.flip-angle-shallow` (starts at `45deg`)
- **Transform Origin Modifiers**: `.flip-origin-left` (flips open like a book cover from the left edge), `.flip-origin-right` (flips open from the right edge)

### Custom Tokens

Customize values directly in your stylesheet or inline styles:

- `--ease-perspective`: Adjust the depth perspective of the parent container (default: `1000px`)
- `--ease-flip-angle`: Adjust the initial rotation angle (default: `90deg`)
- `--ease-flip-duration`: Adjust the speed of the entrance (default: `0.6s`)
- `--ease-flip-easing`: Override the timing curve (default: `cubic-bezier(0.25, 1, 0.5, 1)`)

## Why is it useful?

It aligns with EaseMotion CSS's philosophy of offering lightweight, declarative, and GPU-accelerated micro-interactions with zero JavaScript. By decoupling perspective onto the parent container, it ensures that rotated elements share a unified 3D projection plane, avoiding distortion and delivering true 3D rotations. It is perfect for card flips, profile widgets, product details reveals, and folding screens.

## Tech Stack

- HTML
- CSS (no external dependencies, utilizing modern CSS custom properties and 3D transforms)

## Preview

Open `demo.html` directly in your browser to test and configure the animation sandboxes and hover over cards.

## Contribution Notes

- Class naming suffix handled by the contributor (`-ag` for Antigravity)
- Maintainer will rename classes to standard `ease-*` conventions during final core integration.
