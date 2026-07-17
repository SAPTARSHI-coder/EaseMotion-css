# ease-tooltip

A CSS-only tooltip component for EaseMotion CSS.

## Usage

```html
<button class="ease-tooltip ease-tooltip-top" data-tip="Hello!">
  Hover me
</button>
```

## Classes

| Class | Description |
|---|---|
| `ease-tooltip` | Base tooltip wrapper |
| `ease-tooltip-top` | Tooltip appears above |
| `ease-tooltip-bottom` | Tooltip appears below |
| `ease-tooltip-left` | Tooltip appears to the left |
| `ease-tooltip-right` | Tooltip appears to the right |
| `ease-tooltip-dark` | Dark styled variant |

## Notes
- Pure CSS, no JavaScript
- Uses `data-tip` attribute for tooltip content
- Respects `prefers-reduced-motion`
- Uses EaseMotion CSS design tokens