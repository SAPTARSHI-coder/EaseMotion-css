# ease-progress-bar

Pure CSS scroll-linked reading progress indicator.

## Issue Reference

Issue: #63678

## Feature Description

A lightweight reading progress bar that tracks scroll position. CSS handles all visual variants and animations; JavaScript only updates the transform value. Supports thin, thick, glow, solid, chapter marker, and bottom position variants.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--progress-bar-height` | `4px` | Track height |
| `--progress-bar-bg` | `rgba(255,255,255,0.1)` | Track background |
| `--progress-bar-fill` | `linear-gradient(90deg, #667eea, #764ba2)` | Fill gradient |
| `--progress-bar-fill-solid` | `#667eea` | Solid fill color |
| `--progress-bar-glow` | `rgba(102,126,234,0.4)` | Glow shadow color |
| `--progress-bar-position` | `fixed` | Position type |
| `--progress-bar-z` | `9999` | Z-index |

## Variants

- `.progress-bar-track--thin` — 2px height
- `.progress-bar-track--thick` — 6px height
- `.progress-bar-track--double` — 3px with glow shadow
- `.progress-bar-track--glow` — With box-shadow glow
- `.progress-bar-track--solid` — Solid color fill
- `.progress-bar-track--bottom` — Fixed to bottom edge
- `.progress-bar-track--chapters` — With 25%/50% markers

## JavaScript Usage

Minimal JS needed to update transform:
```js
fill.style.transform = `scaleX(${scrollPercent / 100})`;
```

## Accessibility

- `prefers-reduced-motion`: disables gradient animation
- `prefers-color-scheme`: adapts for light/dark
- Thin visual presence, does not obscure content
- Scroll-based, no keyboard interaction needed
