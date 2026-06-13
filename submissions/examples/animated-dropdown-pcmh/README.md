# Animated Dropdown — Issue #7424

## Overview

CSS-only animated dropdown component using `:focus-within` for toggle behavior. No JavaScript required.

## Variants

- **Button Dropdown** — Standard dropdown with icons and divider
- **Right-Aligned Dropdown** — Menu aligned to the right edge
- **Navbar Item Dropdown** — Underline-indicated nav item style

## Features

- Smooth slide-down + fade-in animation on open
- Slide-up + fade-out on close
- CSS-only (uses `:focus-within` and `:hover`)
- Hover highlight on menu items
- Dividers between grouped items
- Keyboard accessible: Tab focus, Enter/Space to toggle, Escape to close
- Icon support for menu items

## Usage

```html
<div class="ease-dropdown" tabindex="0">
  <button class="ease-dropdown-trigger">
    Actions <span class="arrow">▾</span>
  </button>
  <div class="ease-dropdown-menu">
    <button class="ease-dropdown-item">Item 1</button>
    <div class="ease-dropdown-divider"></div>
    <button class="ease-dropdown-item">Item 2</button>
  </div>
</div>
```

## Files

- `demo.html` — Interactive demo with three variants
- `style.css` — Dropdown component styles
- `README.md` — This documentation
