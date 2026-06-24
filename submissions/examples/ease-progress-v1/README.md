# EaseMotion — `ease-progress`

A general-purpose progress bar component with animated fill states. Suitable for skill meters, form completion, file uploads, survey progress, and any progress-indication UI.

---

## Features

- **Animated fill** — width transition with bounce easing
- **5 colour variants** — primary (default), success, danger, warning, info
- **3 sizes** — small (4px), default (8px), large (14px)
- **Striped** — animated diagonal stripes via `ease-progress-striped`
- **Indeterminate** — marquee-style animation for unknown-duration loading
- **Label** — built-in percentage label with `ease-progress-label`
- **Dark mode** — automatic via `prefers-color-scheme: dark`
- **Reduced motion** — disables animations when `prefers-reduced-motion: reduce`

---

## Usage

### Basic progress bar

```html
<div class="ease-progress">
  <div class="ease-progress-track">
    <div class="ease-progress-fill" style="width: 70%"></div>
  </div>
  <span class="ease-progress-label">70%</span>
</div>
```

### Colour variants

```html
<div class="ease-progress ease-progress-success">...<span>80%</span></div>
<div class="ease-progress ease-progress-danger">...<span>30%</span></div>
<div class="ease-progress ease-progress-warning">...<span>55%</span></div>
<div class="ease-progress ease-progress-info">...<span>92%</span></div>
```

### Sizes

```html
<div class="ease-progress ease-progress-sm">...</div>  <!-- 4px track -->
<div class="ease-progress">...</div>                     <!-- 8px track (default) -->
<div class="ease-progress ease-progress-lg">...</div>   <!-- 14px track -->
```

### Striped

```html
<div class="ease-progress ease-progress-striped">
  ...
</div>
```

### Indeterminate (loading state)

```html
<div class="ease-progress ease-progress-indeterminate">
  ...
</div>
```

### Combined

```html
<div class="ease-progress ease-progress-success ease-progress-striped ease-progress-lg">
  ...
</div>
```

---

## Why does it fit EaseMotion CSS?

Progress bars are a fundamental UI primitive explicitly listed in the project roadmap (v1.3). EaseMotion aims to provide a complete set of "write UI like you describe it in English" components, and `ease-progress` fills this gap with an animation-first approach — using bounce easing for natural fill transitions and subtle striped animations.

---

## Files

1. **`style.css`** — component CSS definitions
2. **`demo.html`** — interactive demo with live value slider
3. **`README.md`** — documentation and usage examples

---

## Notes

- Set the fill width via the `style` attribute (or JS) on `.ease-progress-fill` — e.g. `style="width: 45%"`.
- The label uses `min-width: 2.8rem` to prevent layout shift as the percentage changes.
- `!important` is used only on the indeterminate fill width to override inline styles.
- All colour values reference `--ease-color-*` variables from `core/variables.css`.
