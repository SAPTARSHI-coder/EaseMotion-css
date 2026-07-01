# Neon Progress Ring

Pure CSS concentric neon glow circular progress rings using SVG
`stroke-dasharray` / `stroke-dashoffset` animations — no JavaScript.

## Structure
neon-progress-ring/
├── demo.html
├── style.css
└── README.md
## Usage

```html
<div class="ring-container">
  <svg class="progress-svg" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
    <circle class="ring-track" cx="80" cy="80" r="70"/>
    <circle class="ring-fill ring-cyan" cx="80" cy="80" r="70"
      style="--dashoffset: 110;"/>
  </svg>
  <div class="ring-label">
    <span class="ring-percent">75%</span>
    <span class="ring-name">Storage</span>
  </div>
</div>
```

## Calculating dashoffset

The circumference for r=70 is `2 × π × 70 ≈ 440`.
dashoffset = 440 × (1 - percentage / 100)
| Percentage | dashoffset |
|---|---|
| 25% | 330 |
| 45% | 242 |
| 60% | 176 |
| 75% | 110 |
| 90% | 44  |
| 100% | 0  |

## Color Variants

| Class | Color |
|---|---|
| `ring-cyan` | Cyan neon glow |
| `ring-purple` | Purple neon glow |
| `ring-green` | Green neon glow |
| `ring-amber` | Amber neon glow |

## Features
- Pure HTML & CSS — no JavaScript
- SVG `stroke-dashoffset` animation
- Neon drop-shadow glow via CSS `filter`
- CSS custom property `--dashoffset` for easy percentage control
- 4 color variants
- Fully responsive
- Respects `prefers-reduced-motion`

## Use Cases
- Dashboard metrics
- User profile stats
- Crypto / fintech indicators
- Data loading visualizations