# Gradient Border Animated Badge Cluster

A cluster of pill-shaped badges with a continuously animated rainbow gradient border. Pure HTML and CSS — no JavaScript required.

## Features

- 🌈 Animated gradient border using the dual-background `background-clip` technique
- ✨ Subtle lift on hover
- 📱 Responsive — badges wrap and shrink on small screens
- ♿ Respects `prefers-reduced-motion` (border becomes a static two-color gradient)
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

```html
<div class="badge-cluster">
  <span class="gradient-badge">New</span>
  <span class="gradient-badge">Beta</span>
  <span class="gradient-badge">Pro</span>
</div>
```

## Why it fits EaseMotion CSS

The animated border uses only `background-position` on a layered gradient, no JavaScript or SVG. Readable class names (`badge-cluster`, `gradient-badge`).

## Files

- `demo.html` — a cluster of four example badges
- `style.css` — all styles and the border animation
- `README.md` — this file

## Notes

The gradient colors (`#6c5ce7`, `#00cec9`, `#fd79a8`) can be swapped for any palette — just keep the gradient's first and last color matching so the loop is seamless.