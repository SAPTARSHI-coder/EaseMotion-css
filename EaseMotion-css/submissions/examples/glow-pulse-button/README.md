# Glow Pulse Button

## Overview

A responsive glow pulse button designed for command palette UI. Features continuous pulsing glow animation with four color variants (Blue, Purple, Cyan, Green). Keyboard accessible with `:focus-visible` support and respects `prefers-reduced-motion`.

## Usage

```html
<button class="glow-pulse-btn glow-blue">Execute</button>
<button class="glow-pulse-btn glow-purple">Deploy</button>
<button class="glow-pulse-btn glow-cyan">Activate</button>
<button class="glow-pulse-btn glow-green">Confirm</button>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--glow-pulse-duration` | `2s` | Animation duration |
| `--glow-pulse-intensity` | `0.6` | Glow intensity (0-1) |
| `--glow-pulse-scale` | `1.05` | Scale factor on pulse peak |
| `--glow-color` | Variant-specific | Primary glow color |
| `--glow-shadow` | Variant-specific | Shadow color with opacity |

### Customization

```css
:root {
  --glow-pulse-duration: 1.5s;
  --glow-pulse-scale: 1.1;
}
```

Custom color variant:

```css
.glow-custom {
  --glow-color: #ff00ff;
  --glow-shadow: rgba(255, 0, 255, 0.4);
}
```

## Features

- Pure HTML + CSS (no JavaScript)
- Responsive design
- Keyboard accessible (`:focus-visible`)
- Respects `prefers-reduced-motion`
- GPU-accelerated animations
- Four built-in color variants
- Disabled state support
