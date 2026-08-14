# CSS Animated 3D Button

**Issue:** [#64131](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64131)

3D push-effect buttons with multi-layer box shadows that simulate depth.
Buttons press down on click and lift on hover.

## Design Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--btn3d-primary` | `#6366f1` | Default button color |
| `--btn3d-success` | `#10b981` | Success button color |
| `--btn3d-danger` | `#ef4444` | Danger button color |
| `--btn3d-warning` | `#f59e0b` | Warning button color |
| `--btn3d-radius` | `14px` | Border radius |
| `--btn3d-text` | `#f8fafc` | Text color |

## Variants

| Variant | Description |
|---------|-------------|
| `success` | Green 3D button |
| `danger` | Red 3D button |
| `warning` | Amber 3D button |
| `sm` | Small size |
| `lg` | Large size |
| `pulse` | Animated glow pulse |
| `tilt` | Mouse-tracking 3D tilt |

## Usage

```html
<link rel="stylesheet" href="style.css">
<button class="btn3d">Click Me</button>
```

## Accessibility

- `prefers-reduced-motion`: Disables tilt and pulse
- Native `<button>` elements for keyboard accessibility
- High contrast text on all color variants
