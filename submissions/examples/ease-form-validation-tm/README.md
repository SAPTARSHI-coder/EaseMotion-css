# CSS Form Validation with :has()

**Issue:** [#64064](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64064)

CSS-only form validation using the `:has()` selector and native HTML5
`:valid`/`:invalid` pseudo-classes. Visual feedback without JavaScript.

## Design Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--fv-border-focus` | `#3b82f6` | Focus ring color |
| `--fv-success` | `#10b981` | Valid state color |
| `--fv-error` | `#ef4444` | Error state color |
| `--fv-warning` | `#f59e0b` | Warning/medium strength |
| `--fv-surface` | `#161c2d` | Form container fill |
| `--fv-radius` | `10px` | Input border radius |

## Features

- Label color changes based on input validity
- Border color transitions for valid/invalid states
- Password strength bars with `:has()` selection
- Disabled button state when form is incomplete
- Inline error messages appear on invalid input

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Browser Support

Requires `:has()` selector support (Chrome 105+, Safari 15.4+, Firefox 121+).

## Accessibility

- `prefers-reduced-motion`: Removes transitions
- Native HTML5 validation with semantic labels
- Color contrast meets WCAG AA standards
