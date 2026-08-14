# Count-Up Number Animation

## What does it do?
Animates numbers from 0 to a target value using
`requestAnimationFrame` with an ease-out curve. Triggers
automatically when the element enters the viewport using
`IntersectionObserver`. Supports prefix, suffix, decimals,
custom duration, and a progress bar.

## How is it used?
```html
<div class="count-up-card"
     data-target="10000"
     data-prefix=""
     data-suffix="+"
     data-duration="2000">
  <span class="count-up-number">0</span>
  <div class="count-up-bar"><div class="count-up-bar-fill"></div></div>
  <span class="count-up-label">Users</span>
</div>
```

Then initialize with JS:
```js
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) countUp(entry.target);
  });
}, { threshold: 0.3 });

document.querySelectorAll('.count-up-card').forEach(c => observer.observe(c));
```

## Data Attributes
| Attribute | Description | Default |
|---|---|---|
| `data-target` | Target number | required |
| `data-duration` | Animation duration (ms) | 2000 |
| `data-prefix` | Text before number | `""` |
| `data-suffix` | Text after number | `""` |
| `data-decimals` | Decimal places | 0 |

## Why is it useful?
Stats sections, dashboards, landing pages, and portfolios
use count-up numbers to draw attention and communicate
metrics in an engaging way.

## Features
- `requestAnimationFrame` for smooth 60fps animation
- `easeOutQuart` timing curve
- Viewport trigger via `IntersectionObserver`
- Scale/fade entrance animation
- Progress bar fills alongside count
- Respects `prefers-reduced-motion`
- Configurable prefix, suffix, decimals, duration

## Preview
Open `demo.html` directly in browser and scroll down.