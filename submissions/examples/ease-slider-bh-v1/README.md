# ease-slider Custom Range Input Styling

## What does this do?

Cross-browser custom styling for `<input type="range">` with a colored filled track, larger circular thumb, and subtle grow animation when dragging/focused.

## How is it used?

```html
<input type="range" class="ease-slider" min="0" max="100" value="60">
<input type="range" class="ease-slider ease-slider-primary" min="0" max="100" value="75">
<input type="range" class="ease-slider ease-slider-success" min="0" max="100" value="50">
```

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.ease-slider` | Base custom range slider |
| `.ease-slider-primary` | Primary color variant |
| `.ease-slider-success` | Success/green variant |
| `.ease-slider-warning` | Warning/orange variant |
| `.ease-slider-danger` | Danger/red variant |

## Why is it useful?

Native range sliders look drastically different and mostly ugly across Chrome/Firefox/Safari. A consistent, animated, brand-colored slider is a common real-world need for volume controls, filters, and settings panels:

- ✅ Cross-browser consistent styling
- ✅ Animated thumb on hover/focus
- ✅ Colored track synced to value
- ✅ Zero JavaScript for base styling
- ✅ Multiple color variants
