# Animation: Glassmorphic Floating Emphasis

A premium glassmorphic hover elevation utility for cards and interface elements. Combines `backdrop-filter` blur, 3D perspective transforms, and multi-layer shadow elevation for a modern floating glass effect.

## Features

- **Glass morphism** — `backdrop-filter: blur()` with semi-transparent `rgba()` backgrounds
- **3D float** — `perspective(1000px) translate3d(0, -8px, 15px) rotateX(1deg)` on hover
- **Custom properties** — `--glass-blur`, `--glass-bg`, `--glass-border`, `--glass-shadow` for easy theming
- **Accent variants** — purple, cyan, emerald, rose
- **Accessible** — `:focus-visible` outlines, reduced motion fallback
- **Cross-browser** — Chrome, Firefox, Safari, Edge (note: Firefox requires `layout.css.backdrop-filter.enabled`)

## Usage

```html
<div class="glass-card glass-accent-purple" tabindex="0">
  <span class="card-icon">&#10024;</span>
  <div class="card-title">Premium</div>
  <div class="card-desc">Elevated glass surface</div>
</div>
```

Customize via CSS custom properties:

```css
.glass-card {
  --glass-blur: 16px;
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12);
}
```

## Reduced Motion

On `prefers-reduced-motion: reduce`, the 3D transform and shadow transitions are disabled — only the background color change remains.
