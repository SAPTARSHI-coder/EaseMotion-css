# Animated Tooltip with Arrow Pointer

Pure CSS tooltips with fade-in + directional slide animation and an arrow pointer using the CSS border-trick. No JavaScript. Triggered on `:hover` and `:focus-visible`.

---

## Overview

- **Animation:** `opacity` + `transform` (translateY/translateX 6px offset) transition on `::after` and `::before` pseudo-elements.
- **Arrow:** `::before` border trick — a zero-size box with one colored border side creates a CSS triangle.
- **Four directions:** `--top`, `--bottom`, `--left`, `--right` modifier classes.
- **Tooltip text:** Set via the `data-ease-tooltip` attribute, rendered with `content: attr(data-ease-tooltip)`.
- **Customisation:** CSS variables for background, color, delay, duration, radius, padding.
- **Color presets:** `--ocean`, `--ember`, `--forest` modifier classes.
- **Accessibility:** Triggered on `:focus-visible` as well as `:hover`. `pointer-events: none` on the tooltip bubble.
- **Reduced motion:** Transition duration collapses to `0.01ms`.

---

## Usage

```html
<button class="ease-tooltip ease-tooltip--top"
        data-ease-tooltip="Your tooltip text here">
  Hover or focus me
</button>
```

### CSS Variable Reference

| Variable | Default | Description |
|---|---|---|
| `--ease-tooltip-bg` | `#3b1fa8` | Tooltip background color |
| `--ease-tooltip-color` | `#f8fafc` | Tooltip text color |
| `--ease-tooltip-delay` | `0s` | Show delay |
| `--ease-tooltip-dur` | `0.2s` | Transition duration |
| `--ease-tooltip-radius` | `7px` | Border radius |
| `--ease-tooltip-padding` | `6px 12px` | Inner padding |
| `--ease-tooltip-font` | `0.8rem` | Font size |
