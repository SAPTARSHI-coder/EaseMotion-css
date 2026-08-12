# CSS Clip-Path Shapes Gallery

This submission demonstrates various CSS `clip-path` shapes — polygons, circles, inset, and animated morphs — created entirely in CSS without images. Uses EaseMotion's `--ease-*` design tokens for colors, spacing, and typography throughout.

## Features

- Eight shape cards with unique clip-path variants: hexagon, diamond, pentagon, circle, inset, triangle, bevel, and animated
- Hover effects with `translateY` and `scale` using `--ease-speed-medium` and `--ease-shadow-*` tokens
- Animated gradient on the animated shape card using `--ease-speed-slow`
- Shape size variants (S/M/L/XL) in the parallax section
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`
- Uses `--ease-font-mono` for code snippets within shape cards

## Usage

```html
<div class="shape-visual shape-polygon-hexagon">hexagon</div>
```

```css
.shape-polygon-hexagon {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
```

## Why is it useful?

CSS `clip-path` replaces dozens of image assets with pure CSS code — reducing HTTP requests, improving performance, and enabling crisp scaling at any resolution. This gallery uses EaseMotion's `--ease-color-*` tokens and `--ease-shadow-*` tokens to maintain a cohesive visual language across all shape variants.
