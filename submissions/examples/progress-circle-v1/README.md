# ease-progress-circle

Animated circular progress indicator using SVG `stroke-dashoffset` animation. Zero JavaScript required.

## Usage

```html
<div class="ease-progress-circle ease-progress-circle-primary"
     style="--ease-circle-circumference: 283; --ease-circle-offset: 71;">
  <svg width="100" height="100" viewBox="0 0 100 100">
    <circle class="ease-progress-circle__track" cx="50" cy="50" r="45"/>
    <circle class="ease-progress-circle__fill" cx="50" cy="50" r="45"/>
  </svg>
  <span class="ease-progress-circle__label">75%</span>
</div>
```

## Calculating offset

offset = circumference × (1 - percentage/100)
For r=45: circumference = 2 × π × 45 ≈ 283

| Progress | Offset |
|---|---|
| 25% | 212 |
| 50% | 141 |
| 75% | 71 |
| 90% | 28 |
| 100% | 0 |

## Variants

| Class | Description |
|---|---|
| `ease-progress-circle-primary` | Indigo fill |
| `ease-progress-circle-success` | Green fill |
| `ease-progress-circle-danger` | Red fill |
| `ease-progress-circle-warning` | Orange fill |
| `ease-progress-circle-info` | Cyan fill |
| `ease-progress-circle-sm` | Small 60px size |
| `ease-progress-circle-lg` | Large 140px size |
| `ease-progress-circle-fast` | 600ms animation |
| `ease-progress-circle-slow` | 3s animation |
| `ease-progress-circle-dark` | Dark track variant |

## Submission

- **Author:** sudha09-git
- **Issue:** #3860
- **Files:** `style.css`, `demo.html`
