# Speed Dial Component — EaseMotion CSS

**Issue:** [#22092 — Add speed dial component for floating action button menus](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22092)

A floating action button (FAB) with expandable action menu. Supports vertical, horizontal, and radial (fan-out) expansion directions with staggered animations.

## Structure

```
submissions/core_changes-issue-22092/
├── demo.html       # Live demo page showing all variants
├── style.css       # Component styles
└── README.md       # This file
```

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| **Vertical** | `.ease-speed-dial-vertical` | Actions expand upward/downward |
| **Horizontal** | `.ease-speed-dial-horizontal` | Actions expand sideways |
| **Radial** | `.ease-speed-dial-radial` | Circular fan-out expansion |
| **Stagger** | `.ease-speed-dial-stagger` | Cascading reveal animation |
| **Backdrop** | `.ease-speed-dial-backdrop` | Semi-transparent overlay |
| **Bottom-Right** | `.ease-speed-dial-br` | Fixed position bottom-right |
| **Bottom-Left** | `.ease-speed-dial-bl` | Fixed position bottom-left |
| **Top-Right** | `.ease-speed-dial-tr` | Fixed position top-right |
| **Top-Left** | `.ease-speed-dial-tl` | Fixed position top-left |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />

<div class="ease-speed-dial ease-speed-dial-vertical ease-speed-dial-br" id="dial" onclick="this.classList.toggle('open')">
  <button class="ease-speed-dial-btn">+</button>
  <div class="ease-speed-dial-actions">
    <button class="ease-speed-dial-action">✏️</button>
    <button class="ease-speed-dial-action">📤</button>
    <button class="ease-speed-dial-action">🗑️</button>
  </div>
</div>
```

Toggle with `classList.toggle('open')` on click or via JavaScript.

## Features

- Three expansion directions: vertical, horizontal, radial fan-out
- Four fixed position variants (corners)
- FAB rotates 45° when open
- Staggered animation for cascading button reveals
- Optional backdrop overlay with fade transition
- Customizable sizing via CSS variables
- `@layer easemotion-components` for proper cascade ordering
- Dark mode, reduced motion, and forced-colors support
