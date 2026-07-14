# ease-progress — Animated Progress Bar

A pure-CSS progress bar driven by a single CSS custom property.  
Set `--ease-progress-value` (0–100) and the fill animates automatically — no extra classes or keyframes needed from JS.

## Usage

```html
<!-- Basic 50% bar -->
<div class="ease-progress">
  <div class="ease-progress-bar" style="--ease-progress-value: 50"></div>
</div>

<!-- Large + success + label -->
<div class="ease-progress ease-progress-lg ease-progress-success">
  <div class="ease-progress-bar" style="--ease-progress-value: 75">
    <span class="ease-progress-label">75 %</span>
  </div>
</div>
```

**Update from JS:**
```js
bar.style.setProperty('--ease-progress-value', 80); // animates automatically
```

## Available Classes

| Class | Purpose |
|---|---|
| `ease-progress` | Track container |
| `ease-progress-bar` | Fill element |
| `ease-progress-sm` / `ease-progress-lg` | Size variants |
| `ease-progress-success` / `warning` / `danger` | Color variants |
| `ease-progress-striped` | Static stripe pattern |
| `ease-progress-animated` | Moving stripes |
| `ease-progress-label` | Centered text inside bar |

## Why

- Fills a gap — no dedicated progress bar exists in EaseMotion CSS core
- Uses `--ease-*` design tokens (colors, speed, easing, radius) with fallbacks
- Respects `prefers-reduced-motion` by disabling transitions and animation

## Files

- `style.css` — Component styles
- `demo.html` — Interactive demo with all variants
- `README.md` — This file
