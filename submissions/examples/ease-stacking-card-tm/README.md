# CSS Stacking Card Hover Effect

**Issue:** [#64132](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64132)

Cards that stack behind a main card and fan out on hover, simulating a
physical card stack lift. Built with CSS `::before` and `::after` pseudo-elements.

## Design Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--stack-bg` | `#0f1117` | Page background |
| `--stack-surface` | `#161b27` | Main card surface |
| `--stack-card` | `#1e2436` | Stacked card background |
| `--stack-primary` | `#60a5fa` | Primary action color |
| `--stack-secondary` | `#a78bfa` | Secondary accent |
| `--stack-accent` | `#34d399` | Tag/badge color |
| `--stack-radius` | `16px` | Card border radius |
| `--stack-transition` | `cubic-bezier(0.34,1.56,0.64,1)` | Spring easing |

## Variants

| Variant | Description |
|---------|-------------|
| Default | Rotate + translate with stacked layers |
| `lift` | Pure vertical lift, no rotation |
| `spring` | Extra scale + rotation bounce |
| `theme-magenta` | Pink/magenta color scheme |
| `theme-emerald` | Green/emerald color scheme |

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Accessibility

- `prefers-reduced-motion`: Disables all transitions
- Semantic HTML with proper heading hierarchy
- Keyboard-accessible button elements
