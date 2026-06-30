# ease-neon-border — Animated Neon Glowing Border

Animated neon border effects using `box-shadow` pulse and `conic-gradient` spin. Complements the existing `.ease-hover-glow` and `.ease-glow-shadow-exit` utilities with a persistent animated border glow effect.

## Classes

| Class                | Description                    |
| -------------------- | ------------------------------ |
| `.ease-neon`         | Default purple neon pulse      |
| `.ease-neon-blue`    | Blue neon (`#38bdf8`)          |
| `.ease-neon-green`   | Green neon (`#4ade80`)         |
| `.ease-neon-pink`    | Pink neon (`#f472b6`)          |
| `.ease-neon-amber`   | Amber neon (`#fbbf24`)         |
| `.ease-neon-white`   | White neon (`#f1f5f9`)         |
| `.ease-neon-spin`    | Rotating conic-gradient border |
| `.ease-neon-rainbow` | Full rainbow rotating border   |
| `.ease-neon-paused`  | Pause animation on hover       |

## CSS Custom Properties

| Token                  | Default                | Description                 |
| ---------------------- | ---------------------- | --------------------------- |
| `--ease-neon-color`    | `--ease-color-primary` | Glow colour                 |
| `--ease-neon-size`     | `2px`                  | Border width                |
| `--ease-neon-blur`     | `12px`                 | Outer glow blur radius      |
| `--ease-neon-spread`   | `2px`                  | Outer glow spread           |
| `--ease-neon-duration` | `2s`                   | Pulse animation duration    |
| `--ease-neon-radius`   | `--ease-radius-md`     | Border radius               |
| `--ease-neon-bg`       | `--ease-color-surface` | Background for spin variant |

## Usage

```html
<!-- Basic pulse -->
<div class="ease-neon">Purple neon</div>
<div class="ease-neon ease-neon-pink">Pink neon</div>

<!-- Spinning border (set --ease-neon-bg to match element background) -->
<div class="ease-neon ease-neon-spin" style="--ease-neon-bg: #1e293b;">
  Spinning
</div>

<!-- On any element -->
<button class="ease-neon ease-neon-blue">Neon button</button>
<input class="ease-neon ease-neon-green" />

<!-- Custom colour -->
<div
  class="ease-neon"
  style="--ease-neon-color: #00ffff; --ease-neon-blur: 24px;"
>
  Cyan intense
</div>
```

## Notes

- Best on dark backgrounds — neon glows are most visible against dark surfaces
- `.ease-neon-spin` uses `::before` and `::after` pseudo-elements — ensure the element has `position: relative` and `overflow: visible`
- Set `--ease-neon-bg` to the element's background colour for the spin variant

## Why it fits EaseMotion CSS

Extends the existing glow system (`.ease-hover-glow`, `.ease-glow-shadow-exit`) with a persistent animated border effect. Useful for CTAs, featured cards, gaming UIs, dashboards, and cyberpunk/neon aesthetics.

Closes #11816
