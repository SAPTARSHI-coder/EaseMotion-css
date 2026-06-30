# Badge Component

A lightweight, theme-aware badge component system for status labels, tags, counters, and indicators.

---

## What does this do?

This submission adds a simple, composable CSS badge system powered by the .ease-badge core class and a set of color and layout modifiers.

The current implementation includes:

- neutral, success, warning, danger, primary, secondary, and info badges
- responsive demo layouts for status labels, notifications, product tags, feature chips, and mobile previews
- dark mode-aware demo styling
- `prefers-reduced-motion` support for users who prefer reduced animation

---

## How is it used?

Copy `style.css` into the framework payload or import it as a standalone component.

### Basic usage

```html
<span class="ease-badge">Default</span>
<span class="ease-badge ease-badge-success">Success</span>
<span class="ease-badge ease-badge-warning">Warning</span>
<span class="ease-badge ease-badge-danger">Danger</span>
```

### Optional variants

```html
<span class="ease-badge ease-badge-primary">Primary</span>
<span class="ease-badge ease-badge-secondary">Secondary</span>
<span class="ease-badge ease-badge-info">Info</span>
```

### Composing multiple badges

```html
<div class="badge-preview">
  <span class="ease-badge ease-badge-success">Online</span>
  <span class="ease-badge ease-badge-warning">Limited</span>
  <span class="ease-badge ease-badge-danger">Out of Stock</span>
</div>
```

---

## Class reference

| Class                  | Description           |
| ---------------------- | --------------------- |
| `ease-badge`           | Core badge base style |
| `ease-badge-success`   | Success badge         |
| `ease-badge-warning`   | Warning badge         |
| `ease-badge-danger`    | Danger badge          |
| `ease-badge-primary`   | Primary badge         |
| `ease-badge-secondary` | Secondary badge       |
| `ease-badge-info`      | Informational badge   |

---

## Why is it useful?

- **Composable** — Use the same base component for labels, tags, counters, and status indicators.
- **Framework-friendly** — Minimal, class-based interface that integrates cleanly into EaseMotion CSS.
- **CSS-only** — No JavaScript required for styling or behavior.
- **Accessible** — Supports reduced motion and preserves text legibility in dark mode.
- **Demo-ready** — `demo.html` demonstrates 10 common badge use cases and responsive layouts.

---

## Files

| File        | Purpose                                      |
| ----------- | -------------------------------------------- |
| `demo.html` | Example page showing the badge component     |
| `style.css` | Badge component styles and demo page styling |
| `README.md` | Component documentation and usage guide      |
