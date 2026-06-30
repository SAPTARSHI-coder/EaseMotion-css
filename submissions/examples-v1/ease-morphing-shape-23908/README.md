# CSS Shape Morphing

## What does this do?

CSS-only shape morphing animations using `border-radius` percentage manipulation (organic blob) and `clip-path: polygon()` transitions (geometric morphs). Three animation classes with infinite looping.

## How is it used?

```html
<!-- Organic blob morphing (circle ↔ blob ↔ rounded square) -->
<div class="ease-morph-blob"></div>

<!-- Geometric morphing (diamond ↔ triangle ↔ hexagon) -->
<div class="ease-morph-geometric"></div>

<!-- Combined morphing loader with gradient -->
<div class="ease-morph-loader"></div>
```

| Modifier                 | Effect        |
| ------------------------ | ------------- |
| `ease-morph-blob-fast`   | 1.5s duration |
| `ease-morph-blob-slow`   | 6s duration   |
| `ease-morph-loader-fast` | 1.5s loader   |

Customize via CSS variables: `--ease-morph-duration`, `--ease-morph-color`, `--ease-morph-size`.

## Why is it useful?

Provides loading states and micro-interactions without SVG, JS, or external dependencies. GPU-friendly (only composited properties). Respects `prefers-reduced-motion`.
