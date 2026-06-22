# Circular Progress Ring Component

## What does this do?
An animated circular SVG-based progress indicator that displays completion percentages. This component is highly useful for dashboards, skill visualizers, achievement score rings, and profile completeness trackers.

## How is it used?
Set up the progress ring element wrapping an SVG and a label, using the `--ease-ring-progress` variable for the completion percentage:

```html
<div class="ease-ring" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <svg class="ease-ring-svg" viewBox="0 0 120 120">
    <circle class="ease-ring-track" cx="60" cy="60" r="52" />
    <circle class="ease-ring-fill" cx="60" cy="60" r="52" style="--ease-ring-progress: 75" />
  </svg>
  <div class="ease-ring-label">
    <span class="ease-ring-value">75%</span>
  </div>
</div>
```

### Variants
- **Sizes**: `.ease-ring-sm` (80px), `.ease-ring-md` (120px), `.ease-ring-lg` (160px), `.ease-ring-xl` (200px)
- **Colors**: `.ease-ring-primary`, `.ease-ring-success` (emerald), `.ease-ring-warning` (amber), `.ease-ring-danger` (rose), `.ease-ring-gradient` (gradient fill using SVG defs)

## Why is it useful?
Provides an accessible, customizable circular alternative to traditional linear progress bars. It is completely lightweight, zero-dependency, works with EaseMotion's variables, supports dark mode automatically, and handles accessibility by incorporating standard role/aria properties.
