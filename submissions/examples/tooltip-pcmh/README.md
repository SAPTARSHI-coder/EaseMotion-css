# Animated Tooltip — Issue #7523

## Overview

CSS-driven tooltip with 4 positions, fade+slide animation, arrow indicators, and light variant. Hover-triggered, no JS required.

## Positions

| Direction | Class | Arrow |
|-----------|-------|-------|
| Top | `.ease-tooltip-top` | Downward |
| Bottom | `.ease-tooltip-bottom` | Upward |
| Left | `.ease-tooltip-left` | Right |
| Right | `.ease-tooltip-right` | Left |

## Variants

| Variant | Class | Background |
|---------|-------|------------|
| Default | — | Dark (`#1e293b`) |
| Light | `.ease-tooltip-light` | White + border + shadow |

## Usage

```html
<div class="ease-tooltip ease-tooltip-top">
  <span>Hover me</span>
  <div class="ease-tooltip-content">Tooltip text</div>
</div>
```

## Files

- `demo.html` — Demo with 4 positions, rich content, light variant
- `style.css` — Tooltip positioning, animations, arrows, variants
- `README.md` — This documentation
