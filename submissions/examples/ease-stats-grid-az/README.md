# Stats Grid

Responsive grid of stat/milestone cards with icon, value, and label. Supports accent colors, bordered top, inverted (dark) theme, and configurable column count.

## Usage

```html
<div class="ease-stats-grid-az">
  <div class="ease-stat-card-az">
    <span class="ease-stat-icon-az">&#x1f465;</span>
    <span class="ease-stat-value-az">12,400+</span>
    <p class="ease-stat-label-az">Active Users</p>
  </div>
  <div class="ease-stat-card-az">...</div>
</div>
```

## Variants

- **Accent colors**: `--accent-primary`, `--accent-success`, `--accent-warning`, `--accent-danger`
- **`--bordered-top`**: Colored top border on card
- **`--inverted`**: Dark background cards
- **`--cols-2`**, **`--cols-4`**: Fixed column count (default: auto-fit)

## CSS Variables

| Variable | Default |
|----------|---------|
| `--ease-space-*` | spacing |
| `--ease-radius-lg` | 12px |
| `--ease-color-primary` | #6366f1 |
| `--ease-color-success` | #10b981 |
| `--ease-color-warning` | #f59e0b |
| `--ease-color-danger` | #ef4444 |
| `--ease-color-neutral-*` | grays |
| `--ease-font-sans` | system-ui |
