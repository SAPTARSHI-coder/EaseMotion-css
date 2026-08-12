# Ease Organic Glow Pulse Card

## Description
A pure CSS card with a soft, continuously pulsing organic glow that activates on hover/focus, styled for a warm, handcrafted "organic craft" aesthetic (terracotta and sage tones, subtle textured background, serif typography). Zero JavaScript.

## Features
- Blob-style radial glow that pulses via CSS keyframes while hovered/focused
- Subtle dotted texture overlay for a tactile, handmade feel
- Fully keyboard accessible (`tabindex="0"`, visible `:focus-visible` outline, glow triggers on focus too)
- Fully customizable via CSS custom properties (glow color, duration, scale, card colors)
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-glow-card" tabindex="0">
  <div class="card-content">
    <div class="card-icon">🌿</div>
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Card description text.</p>
    <span class="card-tag">Tag</span>
  </div>
</div>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--glow-duration` | `2.2s` | Pulse animation cycle duration |
| `--glow-easing` | `ease-in-out` | Timing function |
| `--glow-scale` | `1.03` | Card scale on hover/focus |
| `--glow-color` | `rgba(196, 130, 89, 0.35)` | Primary glow color (terracotta) |
| `--glow-color-soft` | `rgba(138, 154, 91, 0.25)` | Secondary glow color (sage) |
| `--card-bg` | `#f5efe6` | Card background (warm cream) |
| `--card-fg` | `#3c3229` | Text color |
| `--card-radius` | `22px` | Corner rounding |

Example override for a different palette:
```html
<div class="ease-glow-card" style="--glow-color: rgba(138,154,91,0.35); --glow-color-soft: rgba(196,130,89,0.25);">
  ...
</div>
```

## Files
- `demo.html` — live working example with two color variants
- `style.css` — component styles
- `README.md` — this file