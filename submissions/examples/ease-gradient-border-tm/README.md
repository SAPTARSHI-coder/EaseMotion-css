# CSS Gradient Border with @property

**Issue:** [#64063](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64063)

Animated gradient borders using CSS `@property` for smooth angle animation
and `conic-gradient` with `-webkit-mask-composite` for the border effect.

## Design Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--grad-primary` | `#6366f1` | Primary gradient color |
| `--grad-secondary` | `#8b5cf6` | Secondary gradient color |
| `--grad-tertiary` | `#ec4899` | Tertiary gradient color |
| `--grad-surface` | `#111827` | Card background |
| `--grad-radius` | `16px` | Border radius |

## Variants

| Variant | Description |
|---------|-------------|
| Default | Rotating conic gradient (animated) |
| `static` | Fixed gradient border |
| `sunset` | Orange/pink/red palette |
| `emerald` | Green/cyan/blue palette |
| `glow` | Adds ambient box-shadow on hover |

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Browser Support

`@property` requires Chrome 85+, Safari 16.4+. Fallback provided.

## Accessibility

- `prefers-reduced-motion`: Disables rotation animation
- Keyboard-accessible button elements
- Sufficient color contrast on dark backgrounds
