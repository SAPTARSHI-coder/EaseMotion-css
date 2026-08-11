# Animated Notification Toast

CSS-only animated toast notification component for EaseMotion-css.

## Classes

### Variants
| Class | Effect |
|-------|--------|
| `ease-toast-success` | Green theme for success messages |
| `ease-toast-error` | Red theme for error messages |
| `ease-toast-warning` | Yellow theme for warnings |
| `ease-toast-info` | Blue theme for information |

### Positions
| Class | Position |
|-------|----------|
| `ease-toast-top-right` | Top right (default) |
| `ease-toast-top-left` | Top left |
| `ease-toast-bottom-right` | Bottom right |
| `ease-toast-bottom-left` | Bottom left |
| `ease-toast-top-center` | Top center |
| `ease-toast-bottom-center` | Bottom center |

## Usage

```html
<div class="ease-toast-container ease-toast-top-right">
  <div class="ease-toast ease-toast-success">
    ✓ Changes saved successfully!
    <button class="ease-toast-close">✕</button>
  </div>
</div>
```

## Features
- Slide-in from screen edge
- Fade-out on dismiss
- Auto-dismiss after 3s
- Progress bar indicator
- 4 variants, 6 positions
- Minimal JS for auto-dismiss only

## Customization
```css
:root {
  --ease-toast-duration: 3s;
  --ease-toast-bg: #1a202c;
  --ease-toast-text: #ffffff;
  --ease-toast-radius: 0.75rem;
}
```