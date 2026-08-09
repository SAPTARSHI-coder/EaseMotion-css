# Animated Toggle Switch

Smooth animated toggle switches for settings and preferences.

## Files

- `demo.html` - Demo page showing various toggle switch styles
- `style.css` - Toggle switch styles and animations

## Usage

Open `demo.html` in a browser. Click the toggles to see the smooth animations.

## Features

### Toggle Variants
- Basic toggle
- With labels
- Size variants (small, default, large)
- Color variants (primary, success, warning, danger)
- Icon toggles (sun/moon)
- Disabled state

### Animations
- Smooth sliding animation
- Bouncy spring effect
- Icon fade transitions
- Focus visible states

## Classes

| Class | Description |
|-------|-------------|
| `ease-toggle-sb` | Toggle switch container |
| `ease-toggle-slider-sb` | Toggle slider track |
| `ease-toggle-small-sb` | Small size variant |
| `ease-toggle-large-sb` | Large size variant |
| `ease-toggle-primary-sb` | Primary color variant |
| `ease-toggle-success-sb` | Success color variant |
| `ease-toggle-warning-sb` | Warning color variant |
| `ease-toggle-danger-sb` | Danger color variant |
| `ease-toggle-icon-sb` | Icon toggle variant |

## Usage

```html
<label class="ease-toggle-sb">
  <input type="checkbox" />
  <span class="ease-toggle-slider-sb"></span>
</label>
```

Closes #45872
