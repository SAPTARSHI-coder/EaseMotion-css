# ease-parallax — Pure CSS Parallax Scrolling Utility

## What does this do?

Creates a parallax scrolling effect using only CSS — no JavaScript required. Uses the `perspective` + `translateZ` technique for smooth, performant depth layering.

## How is it used?

```html
<div class="ease-parallax" style="height: 100vh; overflow-y: auto;">
  <div class="ease-parallax-layer ease-parallax-slow">
    <!-- Background content — scrolls slower -->
  </div>
  <div class="ease-parallax-layer ease-parallax-base">
    <!-- Foreground content — normal scroll -->
  </div>
</div>
```

### Variants

| Class | Effect |
|---|---|
| `.ease-parallax` | Container establishing 3D perspective |
| `.ease-parallax-layer` | Base layer (default translateZ(0)) |
| `.ease-parallax-slow` | Scrolls slower (further back) |
| `.ease-parallax-slower` | Even slower (furthest back) |
| `.ease-parallax-fast` | Scrolls faster (closer) |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-parallax-perspective` | `1px` | Perspective value for depth |

## Why?

Parallax adds visual depth and engagement to hero sections and storytelling layouts. This utility provides it without any JS overhead.

## Accessibility

Respected via `prefers-reduced-motion: reduce` — disables parallax transformation to prevent vestibular triggers.
