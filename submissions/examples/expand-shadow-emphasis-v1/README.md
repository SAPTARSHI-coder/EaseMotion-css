# Animation: Expand Shadow Emphasis

A shadow-expand emphasis animation for cards and interactive elements. On trigger, the shadow blooms outward with a slight lift and scale, then settles back — perfect for momentary emphasis on selection or focus.

## Features

- **Pure CSS** — `@keyframes ease-shadow-expand` with no JS dependency
- **Multi-layered shadow** — expands with a colored glow matching the accent
- **Accompanied lift** — slight `translateY(-4px)` and `scale(1.02)` for depth
- **GPU-friendly** — animates `box-shadow`, `transform` together
- **Color variants** — primary (purple), success (green), amber (yellow), rose (red)
- **Reduced motion** — respects `prefers-reduced-motion`
- **Cross-browser** — Chrome, Firefox, Safari, Edge

## Usage

```html
<div class="shadow-card emphasis-active">
  <!-- content -->
</div>
```

Trigger the `.emphasis-active` class on click (or any event) to play the animation. The shadow expands, lifts, and settles back to rest.
