# Gradient Border Card Utilities

Cards featuring animated and static gradient borders using a pseudo-element overlay technique. Creates a vibrant, modern UI look with zero extra HTML elements needed.

## Features

- **10 gradient variants**: primary, secondary, success, danger, info, warning, sunset, neon, diagonal, rainbow
- **Animated mode**: shifts background-position for a moving gradient effect
- **Size modifiers**: `--sm`, `--lg`, `--pill`
- **Border thickness**: `--thin`, `--thick` (default)
- **Interactive hover**: lift, glow, and shadow on `--hoverable`
- **Accessibility**: `--focus` adds visible focus ring

## Usage

```html
<div class="gradient-border-card gradient-border-card--primary">
  Primary gradient card
</div>
```

Animated version:

```html
<div class="gradient-border-card gradient-border-card--neon gradient-border-card--animated">
  Animated neon border
</div>
```

## Files

- `style.css` — gradient border utilities
- `demo.html` — showcase
- `README.md` — this documentation
