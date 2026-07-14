# Mega Menu Dropdown

A CSS-animated mega menu dropdown with multiple columns, staggered column entrance, backdrop overlay, and icon-enhanced navigation items.

## Overview

The mega menu appears on hover or click of the "Products" nav item. Columns slide in with staggered delays. A backdrop overlay fades in behind the menu. The menu closes on clicking outside, pressing Escape, or clicking the backdrop.

## Features

| Feature | Description |
|---|---|
| Multi-column layout | Three columns with category headers and linked items |
| Staggered entrance | Columns animate in sequentially with 80ms delay |
| Backdrop overlay | Semi-transparent blurred backdrop when menu is open |
| Icon-enhanced items | SVG icons on category headers and each menu item |
| Dual interaction | Opens on hover (desktop) or click (all devices) |
| Dismiss options | Close via backdrop click, outside click, or Escape key |
| Accessible | ARIA `aria-expanded` attribute on trigger button |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--mmd-duration` | `0.35s` | Transition duration for all animations |
| `--mmd-menu-bg` | `#1e293b` | Background color of the mega menu panel |
| `--mmd-column-gap` | `2rem` | Gap between columns inside the menu |
| `--mmd-item-hover` | `#6366f1` | Highlight color for category headers and hovered items |
| `--mmd-radius` | `1rem` | Border radius for navbar and menu panel |
| `--mmd-shadow` | `0 20px 60px rgba(0,0,0,0.5)` | Box shadow on the menu panel |

## Usage

```html
<link rel="stylesheet" href="style.css">

<nav class="mmd-navbar">
  <div class="mmd-dropdown">
    <button class="mmd-nav-link mmd-trigger">Products</button>
    <div class="mmd-backdrop"></div>
    <div class="mmd-menu">
      <div class="mmd-column" style="--mmd-stagger: 0;">
        <h3>Category</h3>
        <a href="#" class="mmd-item">Item</a>
      </div>
    </div>
  </div>
</nav>
```

Include the provided JavaScript to handle open/close states via the `.mmd-open` class on `.mmd-dropdown`.
