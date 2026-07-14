# ease-morphing-shape

Pure CSS shape morphing animations for EaseMotion CSS. No JavaScript, no SVG, no Canvas.

## Features

- **Organic blob morphing** — Animated border-radius for fluid organic shapes
- **Geometric morphing** — Polygon clip-path transitions (square → diamond → hexagon → pentagon)
- **Gradient loader** — Scale + rotate + gradient morphing for loading states
- **Square ↔ Diamond** — Clean geometric clip-path animation
- **Circle ↔ Rounded Square** — Subtle border-radius morphing
- **Size modifiers** — Small (60px), Medium (120px), Large (200px)
- **Speed modifiers** — Fast (1.5s), Default (varies), Slow (6s)
- **Color variants** — Primary, Success, Danger, Info
- **Gradient presets** — Primary, Ocean, Forest
- **Graceful degradation** — Falls back to blob animation on browsers without clip-path
- **`prefers-reduced-motion`** accessibility support

## Usage

### Organic Blob

```html
&lt;div class="ease-morph ease-morph-blob ease-morph-primary ease-morph-md"&gt;&lt;/div&gt;