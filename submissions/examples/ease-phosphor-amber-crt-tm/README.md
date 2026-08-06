# ease-phosphor-amber

CSS-only phosphor amber CRT terminal theme animation.

**Issue:** #63166

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--crt-bg` | `#0a0500` | Screen background |
| `--crt-fg` | `#ffb000` | Primary text (amber) |
| `--crt-fg-bright` | `#ffd060` | Bright text color |
| `--crt-fg-dim` | `#996600` | Dimmed text |
| `--crt-scanline-opacity` | `0.08` | Scanline overlay density |
| `--crt-glow-color` | `rgba(255,176,0,0.5)` | Text glow color |
| `--crt-glow-spread` | `4px` | Glow radius |
| `--crt-font-size` | `14px` | Base font size |
| `--crt-font-family` | `Courier New, monospace` | Terminal font |

## Effects

- **Scanlines** — Horizontal scanline overlay
- **Screen Glow** — Radial vignette darkening edges
- **Flicker** — Subtle brightness oscillation
- **Text Glow** — Phosphor bloom on text
- **Cursor Blink** — Terminal cursor animation
- **Boot Line** — Typewriter-style line reveal
- **Scan Sweep** — Moving horizontal light sweep

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="crt-screen crt-flicker">
  <div class="crt-scan-line"></div>
  <div class="crt-prompt">...</div>
</div>
```

## Accessibility

- `prefers-reduced-motion: reduce` disables flicker and scan sweep animations
