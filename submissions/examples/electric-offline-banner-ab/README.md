# Electric Offline Banner — Neon

**Implements:** #42040

---

## Overview

A pure CSS animated offline notification banner with electric neon effects inspired by Neon design patterns. Features an animated shimmer sweep, glowing dot indicator, and elastic slide-in entrance. Zero JavaScript required.

## Features

- Electric shimmer sweep animation across banner
- Glowing pulsing dot indicator
- Elastic slide-in entrance animation
- 3 color variants: cyan (default), amber (warning), green (online)
- Compact pill variant
- Keyboard accessible
- prefers-reduced-motion support
- Fully responsive

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ob-cyan` | `#00d4ff` | Default neon color |
| `--ob-amber` | `#f59e0b` | Warning color |
| `--ob-green` | `#00ff88` | Success color |
| `--ob-duration` | `0.4s` | Entrance animation duration |
| `--ob-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic easing |

## Usage

```html
<div class="ease-offline-banner">
  <span class="ease-offline-icon">⚡</span>
  <span class="ease-offline-text">You are currently offline.</span>
  <span class="ease-offline-dot"></span>
</div>
```

## Variants

| Class | Effect |
|-------|--------|
| `ease-offline-banner` | Default cyan electric |
| `ease-offline-banner--amber` | Warning amber variant |
| `ease-offline-banner--green` | Back online green variant |
| `ease-offline-banner--compact` | Compact pill shape |

## How to Preview

1. Open `demo.html` in any modern browser
2. No build step required

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 90+            |
| Firefox | 88+            |
| Safari  | 14+            |
| Edge    | 90+            |