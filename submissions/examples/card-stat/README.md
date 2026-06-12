# ease-card-stat

Stat/metric card component for dashboards and analytics displays. Part of the `ease-card` family in `components/cards.css`.

## Usage

```html
<div class="ease-card ease-card-stat">
  <div class="ease-stat-value">12,847</div>
  <div class="ease-stat-label">Total Users</div>
</div>
```

## Sub-classes

| Class             | Description                              |
| ----------------- | ---------------------------------------- |
| `ease-card-stat`  | Card with centered text layout for stats |
| `ease-stat-value` | Large primary-colored number/value       |
| `ease-stat-label` | Small uppercase muted label              |

## Variants (custom)

| Class                  | Description                     |
| ---------------------- | ------------------------------- |
| `ease-stat-trend-up`   | Adds green up arrow after value |
| `ease-stat-trend-down` | Adds red down arrow after value |

## Notes

- Override value color with inline `style` or custom CSS
- Combine with `ease-card-shadow`, `ease-card-hover` for depth
- Use with `ease-count-up` for animated number transitions

## Submission

- **Author:** SAPTARSHI-coder
- **Issue:** #4703
- **Files:** `style.css`, `demo.html`
