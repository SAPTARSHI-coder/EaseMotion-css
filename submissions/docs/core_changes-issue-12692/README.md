# ease-progress

## What does this do?

Provides a CSS-only progress bar component with determinate (percentage-based), indeterminate (animated), striped, and animated striped variants. Includes four sizes, five color themes, smooth width transitions, and dark mode support.

## How is it used?

**Determinate bar:**

```html
<div class="ease-progress">
  <div class="ease-progress-bar" style="width: 45%;"></div>
</div>
```

**Indeterminate (loading):**

```html
<div class="ease-progress ease-progress-indeterminate">
  <div class="ease-progress-bar"></div>
</div>
```

**With label:**

```html
<div class="ease-progress-label">
  <span>Progress</span>
  <span>45%</span>
</div>
<div class="ease-progress">
  <div class="ease-progress-bar" style="width: 45%;"></div>
</div>
```

### Variants

| Modifier                       | Effect                                |
| ------------------------------ | ------------------------------------- |
| (none)                         | Default primary color, 0.75rem height |
| `.ease-progress-sm`            | 0.375rem height                       |
| `.ease-progress-lg`            | 1.125rem height                       |
| `.ease-progress-xl`            | 1.5rem height                         |
| `.ease-progress-primary`       | Accent fill (default)                 |
| `.ease-progress-success`       | Green fill                            |
| `.ease-progress-danger`        | Red fill                              |
| `.ease-progress-warning`       | Amber fill                            |
| `.ease-progress-info`          | Cyan fill                             |
| `.ease-progress-indeterminate` | Continuous sliding animation          |
| `.ease-progress-striped`       | Diagonal stripe pattern               |
| `.ease-progress-animated`      | Animated stripes (use with striped)   |

### CSS Custom Properties

| Property    | Default   | Description            |
| ----------- | --------- | ---------------------- |
| `--pbg`     | `#f1f5f9` | Track background       |
| `--pfill`   | `#6c63ff` | Fill color             |
| `--pradius` | `9999px`  | Border radius          |
| `--pheight` | `0.75rem` | Bar height             |
| `--pspeed`  | `0.5s`    | Width transition speed |

## Why is it useful?

Progress bars are essential for file uploads, multi-step forms, skill displays, loading states, and dashboard widgets. This component provides a consistent, accessible set of progress bar styles that integrate with EaseMotion's design language.

## Features

- Determinate (percentage-based) and indeterminate (animated) modes
- Four sizes: sm, md (default), lg, xl
- Five color themes: primary, success, danger, warning, info
- Striped variant with optional animated stripes
- Smooth width transition on value change
- Dark mode support via `prefers-color-scheme`
- Respects `prefers-reduced-motion`
- Optional label element for accessible percentage display
