# ease-progress Bar Component

Implements the missing `ease-progress`, `ease-progress-fill`, and
`ease-progress-striped` classes referenced in `docs/cheatsheet.html`
(see issue #5716).

## Files
- `demo.html` - Working demo with fill, striped, size variants, and interactive control
- `style.css` - Component styles
- `README.md` - This file

## Usage

### Basic

```html
<div class="ease-progress">
  <div class="ease-progress-fill" style="--ease-progress-width: 60%;"></div>
</div>
```

### Striped

```html
<div class="ease-progress ease-progress-striped">
  <div class="ease-progress-fill" style="--ease-progress-width: 45%;"></div>
</div>
```

### Animated Stripes

```html
<div class="ease-progress ease-progress-striped ease-progress-striped--animated">
  <div class="ease-progress-fill" style="--ease-progress-width: 70%;"></div>
</div>
```

### Color Variants

```html
<div class="ease-progress-fill ease-progress-fill--success" style="--ease-progress-width: 60%;"></div>
<div class="ease-progress-fill ease-progress-fill--warning" style="--ease-progress-width: 75%;"></div>
<div class="ease-progress-fill ease-progress-fill--danger"  style="--ease-progress-width: 90%;"></div>
```

### Size Variants

```html
<div class="ease-progress ease-progress--thin">...</div>
<div class="ease-progress ease-progress--thick">...</div>
```

## CSS Variables

| Variable                 | Default                        | Description             |
|--------------------------|--------------------------------|-------------------------|
| `--ease-progress-width`  | `0%`                           | Fill percentage         |
| `--ease-progress-height` | `0.75rem`                      | Bar height              |
| `--ease-color-primary`   | `#38bdf8`                      | Default fill color      |
| `--ease-speed-medium`    | `0.4s`                         | Transition duration     |
| `--ease-ease`            | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing       |

## Features
- Token-based: uses `--ease-*` CSS variables, fully themeable
- Smooth width transition on fill change
- Striped variant via diagonal gradient pattern
- Animated stripe option via `@keyframes`
- Thin/thick size modifiers
- Color variants: primary, success, warning, danger
