# Animated Progress Indicator

Smooth animated progress bars for loading states and task completion.

## Files

- `demo.html` - Demo page showing various progress bar styles
- `style.css` - Progress bar styles and animations

## Usage

Open `demo.html` in a browser to see the animated progress bars.

## Features

### Progress Bar Variants
- Basic progress bar
- Animated striped
- Animated gradient
- With labels
- Success state
- Multiple colors (primary, warning, danger)

### Animations
- Striped animation (moving stripes)
- Gradient animation (shifting colors)
- Success glow effect
- Smooth width transitions

## Classes

| Class | Description |
|-------|-------------|
| `ease-progress-sb` | Progress bar container |
| `ease-progress-bar-sb` | Progress bar fill |
| `ease-progress-striped-sb` | Striped animated variant |
| `ease-progress-gradient-sb` | Gradient animated variant |
| `ease-progress-labeled-sb` | Progress with labels |
| `ease-progress-success-sb` | Success state variant |
| `ease-progress-primary-sb` | Primary color variant |
| `ease-progress-warning-sb` | Warning color variant |
| `ease-progress-danger-sb` | Danger color variant |

## Usage

```html
<div class="ease-progress-sb">
  <div class="ease-progress-bar-sb" style="width: 50%"></div>
</div>
```

Closes #45875
