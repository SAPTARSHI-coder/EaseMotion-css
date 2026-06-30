# EaseMotion Responsive Display Utilities

Responsive display utility classes for EaseMotion CSS — hide, show, or change display mode at any viewport breakpoint without writing media queries.

---

## Available Classes

### Static Utilities

| Class                | Effect                  |
| -------------------- | ----------------------- |
| `.ease-block`        | `display: block`        |
| `.ease-inline`       | `display: inline`       |
| `.ease-inline-block` | `display: inline-block` |
| `.ease-flex`         | `display: flex`         |
| `.ease-inline-flex`  | `display: inline-flex`  |
| `.ease-grid`         | `display: grid`         |
| `.ease-inline-grid`  | `display: inline-grid`  |
| `.ease-hidden`       | `display: none`         |

### Responsive — Hide Above Breakpoint

Apply `display: none` when the viewport is **at or above** the given width.

| Class             | Range    |
| ----------------- | -------- |
| `.ease-hidden-sm` | ≥ 640px  |
| `.ease-hidden-md` | ≥ 768px  |
| `.ease-hidden-lg` | ≥ 1024px |
| `.ease-hidden-xl` | ≥ 1280px |

### Responsive — Show Above Breakpoint

Apply a `display` value only at or above the given width. Use these to override a smaller default.

| Class             | Display  | Range    |
| ----------------- | -------- | -------- |
| `.ease-block-sm`  | `block`  | ≥ 640px  |
| `.ease-flex-sm`   | `flex`   | ≥ 640px  |
| `.ease-inline-sm` | `inline` | ≥ 640px  |
| `.ease-block-md`  | `block`  | ≥ 768px  |
| `.ease-flex-md`   | `flex`   | ≥ 768px  |
| `.ease-inline-md` | `inline` | ≥ 768px  |
| `.ease-block-lg`  | `block`  | ≥ 1024px |
| `.ease-flex-lg`   | `flex`   | ≥ 1024px |
| `.ease-inline-lg` | `inline` | ≥ 1024px |
| `.ease-block-xl`  | `block`  | ≥ 1280px |
| `.ease-flex-xl`   | `flex`   | ≥ 1280px |
| `.ease-inline-xl` | `inline` | ≥ 1280px |

### Responsive — Hide Below Breakpoint

Apply `display: none` below the given width (visible at and above it).

| Class                  | Range    |
| ---------------------- | -------- |
| `.ease-hidden-down-sm` | < 640px  |
| `.ease-hidden-down-md` | < 768px  |
| `.ease-hidden-down-lg` | < 1024px |
| `.ease-hidden-down-xl` | < 1280px |

---

## Usage Examples

### Hide a sidebar on mobile, show on desktop

```html
<aside class="ease-hidden-down-lg">
  <!-- Sidebar visible only on lg+ screens -->
</aside>
```

### Change layout from stacked to flex row on medium+ screens

```html
<div class="ease-flex-md" style="display:block">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Show a mobile-only banner

```html
<div class="ease-hidden-sm">
  This banner hides on sm+ screens (visible on mobile)
</div>
```

---

## Why does it fit EaseMotion CSS?

EaseMotion aims to let developers "write UI like you describe it in English." Responsive display utilities are a fundamental building block in every CSS framework — they let authors control visibility per breakpoint with single classes, reducing repetitive `@media` blocks across projects.

---

## Files

1. **`style.css`** — all utility class definitions
2. **`demo.html`** — interactive demo with live breakpoint indicator
3. **`README.md`** — documentation and usage examples

---

## Notes

- All responsive utilities use `!important` to reliably override other display values. Use them at a single breakpoint per element.
- Breakpoint values follow the framework convention: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`.
- `ease-hidden-down-*` uses `max-width: (bp - 1px)` so there is no overlap with the `min-width` classes.
- No JavaScript is required for the CSS utilities — JS in `demo.html` is only for the live breakpoint label.
